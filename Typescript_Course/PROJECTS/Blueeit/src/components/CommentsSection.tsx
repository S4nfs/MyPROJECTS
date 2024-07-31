import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { FC } from 'react'
import PostComment from './PostComment'
import CreateComment from './CreateComment'

interface CommentsSectionProps {
  postId: string
}

const CommentsSection = async ({ postId }: CommentsSectionProps) => {
  const session = getAuthSession()
  const comments = await db.comment.findMany({
    where: {
      postId: postId,
      replyToId: null,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      author: true,
      votes: true,
      replies: {
        include: {
          author: true,
          votes: true,
        },
      },
    },
  })

  return (
    <div className='flex flex-col gap-y-4 mt-4'>
      <hr className='w-full h-px my-6' />
      {/* create comments  */}
      <CreateComment postId={postId} />
      <div className='flex flex-col gap-y-6 '>
        {comments
          .filter((comment) => !comment.replyToId)
          .map((topLevelComment) => {
            const topLevelCommentVotesAmt = topLevelComment.votes.reduce((acc, cur) => {
              if (cur.type === 'UP') return acc + 1
              if (cur.type === 'DOWN') return acc - 1
              return acc
            }, 0)
            const topLevelCommentVote = topLevelComment.votes.find((vote) => vote.userId === session?.user.id)
            return (
              <div key={topLevelComment.id} className='flex flex-col'>
                <div className='mb-2'>
                  <PostComment comment={topLevelComment} postId={postId} currentVote={topLevelCommentVote} votesAmt={topLevelCommentVotesAmt} />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default CommentsSection
