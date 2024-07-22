'use client'
import { useCustomToast } from '@/hooks/use-custom-toast'
import { cn } from '@/lib/utils'
import { usePrevious } from '@mantine/hooks'
import { VoteType } from '@prisma/client'
import { ArrowBigDown, ArrowBigLeftIcon, ArrowBigUp, Axe } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { useMutation } from '@tanstack/react-query'
import { PostVoteRequest } from '@/lib/validators/votes'
import axios, { AxiosError } from 'axios'
import { error } from 'console'
import { toast } from '@/hooks/use-toast'

interface PostVoteClientProps {
  postId: string
  initialVotesAmt: number
  initialVote?: VoteType | null
}

const PostVoteClient: FC<PostVoteClientProps> = ({ postId, initialVotesAmt, initialVote }) => {
  const { loginToast } = useCustomToast()
  const [votesAmt, setVotesAmt] = useState<number>(initialVotesAmt)
  const [currentVote, setCurrentVote] = useState(initialVote)
  const prevVote = usePrevious(currentVote)

  useEffect(() => {
    setCurrentVote(initialVote)
  }, [initialVote])

  const { mutate: vote } = useMutation({
    mutationFn: async (voteType: VoteType) => {
      const payload: PostVoteRequest = {
        postId,
        voteType,
      }

      await axios.patch('/api/subreddit/post/vote', payload)
    },
    onError: (error, voteType) => {
      if (voteType === 'UP') setVotesAmt((prev) => prev - 1)
      else setVotesAmt((prev) => prev + 1)

      // reset current vote
      setCurrentVote(prevVote)
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return loginToast()
        }
      }
      return toast({
        title: 'Something went wrong',
        description: 'Vote not registered.',
        variant: 'destructive',
      })
    },
    onMutate: (type: VoteType) => {
      if (currentVote === type) {
        setCurrentVote(undefined)
        if (type === 'UP') setVotesAmt((prev) => prev - 1)
        else if (type === 'DOWN') setVotesAmt((prev) => prev + 1)
      } else {
        setCurrentVote(type)
        if (type === 'UP') setVotesAmt((prev) => prev + (currentVote ? 2 : 1))
        else if (type === 'DOWN') setVotesAmt((prev) => prev - (currentVote ? 2 : 1))
      }
    },
  })

  return (
    <div className='flex sm:flex-col gap-4 sm:gap-4 pr-6 sm:w-20 pb-4 sm:pb-0'>
      <Button size='sm' variant='ghost' aria-labe='upvote' onClick={() => vote('UP')}>
        <ArrowBigUp className={cn('h-5 w-5 text-zinc-700', { 'text-emerald-500 fill-emerald-500': currentVote === 'UP' })} />{' '}
      </Button>
      <p className='text-center py-2 font-medium text-sm text-zinc-900'>{votesAmt}</p>{' '}
      <Button size='sm' variant='ghost' aria-labe='downvote' onClick={() => vote('DOWN')}>
        <ArrowBigDown className={cn('h-5 w-5 text-zinc-700', { 'text-red-500 fill-red-500': currentVote === 'DOWN' })} />{' '}
      </Button>
    </div>
  )
}

export default PostVoteClient
