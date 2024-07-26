import EditorOutput from '@/components/EditorOutput'
import PostVoteServer from '@/components/post-vote/PostVoteServer'
import { buttonVariants } from '@/components/ui/Button'
import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { formatTimeToNow } from '@/lib/utils'
import { CachedPost } from '@/types/redis'
import { Post, User, Vote } from '@prisma/client'
import { ArrowBigDown, ArrowBigUp, Loader2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { FC, Suspense } from 'react'

interface PageProps {
  params: {
    postId: string
  }
}

//for hard reload to get fresh data
export const dynamic = 'force-dynamic'
export const fetchCatche = 'force-no-store'

const page = async ({ params }: PageProps) => {
  const cachedPost = (await redis.hgetall(`post:${params.postId}`)) as CachedPost
  let post: (Post & { votes: Vote[]; author: User }) | null = null
  if (!cachedPost) {
    post = await db.post.findUnique({
      where: { id: params.postId },
      include: {
        votes: true,
        author: true,
      },
    })
  }
  if (!cachedPost && !post) {
    return notFound()
  }
  return (
    <div>
      <div className='flex h-full flex-col sm:flex-row items-center sm:items-start justify-between '>
        <Suspense fallback={<PostVoteShell />}>
          {/* Its just typescript not recognizing the server component async behavoius as its quite new so we use to ignore that error saying "PostVoteServer cannot be used as a JSX component."*/}
          {/* @ts-expect-error server component */}
          <PostVoteServer
            postId={post?.id ?? cachedPost?.id}
            getData={async () => {
              return await db.post.findUnique({
                where: { id: params.postId },
                include: {
                  votes: true,
                  author: true,
                },
              })
            }}
          />
        </Suspense>
        <div className='sm:w-0 w-full bg-while rounded-sm p-4 flex-1'>
          <p className='max-h-40 mt-1 truncate text-xs text-gray-500'>
            Posted by u/{post?.author.username ?? cachedPost.authorUsername} {formatTimeToNow(new Date(post?.createdAt ?? cachedPost.createdAt))}
          </p>
          <h1 className='text-xl font-semibold py-2 leading-6 text-gray-900'>{post?.title ?? cachedPost.title}</h1>
          <EditorOutput content={post?.content ?? cachedPost.content} />
          <Suspense fallback={<Loader2 />} className='h-5 w-5 animate-spin text-zinc-500'>
            {' '}
            <CommentsSection />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function PostVoteShell() {
  return (
    <div className='flex items-center flex-col pr-6 w-20'>
      {/* upvote */}
      <div className={buttonVariants({ variant: 'ghost' })}>
        <ArrowBigUp className='h-5 w-5 text-zinc-700' />
      </div>
      {/* score  */}
      <div className='text-center py-2 font-medium text-sm text-zinc-900'>
        <Loader2 className='h-3 w-3 animate-spin' />
        {/* downvote */}
        <div className={buttonVariants({ variant: 'ghost' })}>
          <ArrowBigDown className='h-5 w-5 text-zinc-700' />
        </div>
      </div>
    </div>
  )
}
export default page
