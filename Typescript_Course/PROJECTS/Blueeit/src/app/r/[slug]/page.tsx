import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '@/app/api/config'
import MiniCreatePost from '@/components/MiniCreatePost'
import PostFeed from '@/components/PostFeed'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import React from 'react'

interface PageProps {
  params: {
    slug: string
  }
}

const page = async ({ params }: PageProps) => {
  const { slug } = params
  const session = await getAuthSession()
  const subreddit = await db.subreddit.findFirst({
    where: { name: slug },
    include: {
      posts: {
        include: {
          author: true,
          votes: true,
          comments: true,
          subreddit: true,
        },
        take: INFINITE_SCROLLING_PAGINATION_RESULTS,
      },
    },
  })
  if (!subreddit) return notFound()
  return (
    <>
      <h1 className='font-bold text-3xl md:text-4xl h-14 '>r/{subreddit.name}</h1>
      <MiniCreatePost session={session} />
      {/* Show posts in users feed  */}
      <PostFeed initialPosts={} />
    </>
  )
}

export default page
