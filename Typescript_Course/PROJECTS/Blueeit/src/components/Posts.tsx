import { formatTimeToNow } from '@/lib/utils'
import { Post, User, Vote } from '@prisma/client'
import { MessageSquare } from 'lucide-react'
import React, { useRef } from 'react'
import EditorOutput from './EditorOutput'

interface PostProps {
  subredditName: string
  post: Post & {
    author: User
    votes: Vote[]
  }
  commentAmt: number
}

const Posts = ({ subredditName, post, commentAmt }: PostProps) => {
  const pRef = useRef<HTMLDivElement>(null)
  return (
    <div className='rounded-md bg-white shadow'>
      <div className='px-6 py-4 flex justify-between'>
        <div className='w-0 flex-1'>
          <div className='max-h-40 mt-1 text-xs text-gray-500'>
            {subredditName ? (
              <>
                <a className='underline text-zinc-900 text-sm underline-offset-2' href={`r/${subredditName}`}>
                  r/{subredditName}
                </a>
                <span className='px-1'>.</span>
              </>
            ) : null}
            <span>Posted bu u/{post.author.name}</span> {formatTimeToNow(new Date(post.createdAt))}
          </div>
          <a href={`r/${subredditName}/post/${post.id}`}>
            <h1 className='text-lg font-semibold py-2 leading-6 text-gray-900'>{post.title}</h1>
          </a>
          <div className='relative text-sm max-h-40 w-full overflow-clip' ref={pRef}>
            <EditorOutput content={post.content} />
            {pRef.current?.clientHeight === 160 ? <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent'></div> : null}
          </div>
        </div>
      </div>
      <div className='bg-gray-50 z-20 text-sm p-4 sm:px-6 '>
        <a className='w-fit flex items-center gap-2' href={`r/${subredditName}`}>
          <MessageSquare className='h-4 w-4' />
          {commentAmt} comments
        </a>
      </div>
    </div>
  )
}

export default Posts
