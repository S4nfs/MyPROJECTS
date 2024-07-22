import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"
import { redis } from "@/lib/redis"
import { PostValidator } from "@/lib/validators/post"
import { PostVoteValidator } from "@/lib/validators/votes"
import { CachedPost } from "@/types/redis"
import { z } from "zod"

const CACHE_AFTER_UPVOTES = 1
export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        const { postId, voteType}= PostVoteValidator.parse(body)
        const session = await getAuthSession()
        if (!session?.user) {
            return new Response("Unauthorized", { status: 401 })
        }
const existingVote = await db.vote.findFirst({
    where: {
        userId: session.user.id,
        postId: postId
    }

}) 
const post  = await db.post.findUnique({
    where: {
        id: postId
    },
    include: {
        author: true,
        votes: true
    }
})
if (!post) {
    return new Response("Post not found", { status: 404 })
}
if(existingVote){
    if(existingVote.type === voteType){
        await db.vote.delete({
            where: {
                userId_postId: {
                    postId,
                session: session.user.id
                } 
            }
        })
        return new Response('OK')
    }
    await db.vote.update({
        where : {
            userId_postId: {
                postId,
                userId: session.user.id
            }
        },
        data: {
            type: voteType
        }
    })

    //recount the votes
    const votesAmt = post.votes.reduce((acc, vote) => {
        if (vote.type === 'UP') return acc + 1
        if (vote.type === 'DOWN') return acc - 1
        return acc
    }, 0)
    if(votesAmt >= CACHE_AFTER_UPVOTES){
        const cachePayload: CachedPost= {
            authorUsername: post.author.username ?? '',
            content: JSON.stringify(post.content),
            id: post.id,
            title: post.title,
            currentVote: voteType,
            createdAt: post.createdAt
        }
        await redis.hset(`post: ${postId}`, cachePayload)
    }
    return new Response('OK')
}
await db.vote.create({
    data: {
        type: voteType,
        userId: session.user.id,
        postId: postId
          
    }
})
 //recount the votes
 const votesAmt = post.votes.reduce((acc, vote) => {
    if (vote.type === 'UP') return acc + 1
    if (vote.type === 'DOWN') return acc - 1
    return acc
}, 0)
if(votesAmt >= CACHE_AFTER_UPVOTES){
    const cachePayload: CachedPost= {
        authorUsername: post.author.username ?? '',
        content: JSON.stringify(post.content),
        id: post.id,
        title: post.title,
        currentVote: voteType,
        createdAt: post.createdAt
    }
    await redis.hset(`post: ${postId}`, cachePayload)

}
    return new Response('OK')
} catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid data', { status: 422 })
    } //422 invalid data
    return new Response('could not register your vote, please try again.', { status: 500 })
  }
}