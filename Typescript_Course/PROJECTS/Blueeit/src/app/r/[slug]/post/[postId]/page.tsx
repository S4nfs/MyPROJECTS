import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { CachedPost } from '@/types/redis'
import { Post, User, Vote } from '@prisma/client'
import { notFound } from 'next/navigation'
import { FC } from 'react'

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
      <div className='flex h-full flex-col sm:flex-row items-center sm:items-start justify-between '></div>
    </div>
  )
}

export default page
