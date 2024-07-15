'use client'
import { ExtendedPost } from '@/types/db'
import React, { useRef } from 'react'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { INFINITE_SCROLLING_PAGINATION_RESULTS } from '@/app/api/config'
import { useSession } from 'next-auth/react'
import Posts from './Posts'

interface PostFeedProps {
  initialPosts: ExtendedPost[]
  subredditName?: string
}
const PostFeed = ({ initialPosts, subredditName }: PostFeedProps) => {
  const lastPostRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  })
  const { data: session } = useSession()
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['infinite-query'],
    async ({ pageParam = 1 }) => {
      const query = `/api/posts?limit=${INFINITE_SCROLLING_PAGINATION_RESULTS}&page=${pageParam}` + (!!subredditName ? `&subredditName=${subredditName}` : '')
      const { data } = await axios.get(query)
      return data as ExtendedPost[]
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: { pages: [initialPosts], pageParams: [1] },
    }
  )
  const posts = data?.pages.flatMap((page) => page) ?? initialPosts
  return (
    <ul className='flex flex-col col-span-2'>
      {posts.map((post, index) => {
        const voteAmt = post.votes.reduce((acc, vote) => {
          if (vote.type === 'UP') return acc + 1
          if (vote.type === 'DOWN') return acc - 1
          return acc
        }, 0)
        const currentVote = post.votes.find((vote) => vote.userId === session?.user.id)
        if (index === posts.length - 1) {
          return (
            <li key={index} ref={ref}>
              <Posts subredditName={post.subreddit.name} post={post} commentAmt={post.comments.length} />
            </li>
          )
        } else {
          return <Posts subredditName={post.subreddit.name} post={post} commentAmt={post.comments.length} />
        }
      })}
    </ul>
  )
}

export default PostFeed
