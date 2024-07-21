'use client'
import { useCustomToast } from '@/hooks/use-custom-toast'
import { cn } from '@/lib/utils'
import { usePrevious } from '@mantine/hooks'
import { VoteType } from '@prisma/client'
import { ArrowBigDown, ArrowBigLeftIcon, ArrowBigUp } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { Button } from '../ui/Button'

interface PostVoteClientProps {
  postId: string
  initialVotesAmt: number
  initialVote?: VoteType | null
}

const PostVoteClient: FC<PostVoteClientProps> = ({ postId, initialVotesAmt, initialVote }) => {
  const { loginToast } = useCustomToast()
  const [votesAmt, setvotesAmt] = useState<number>(initialVotesAmt)
  const [currentVote, setCurrentVote] = useState(initialVote)
  const prevvote = usePrevious(currentVote)

  useEffect(() => {
    setCurrentVote(initialVote)
  }, [initialVote])

  return (
    <div className='flex sm:flex-col gap-4 sm:gap-4 pr-6 sm:w-20 pb-4 sm:pb-0'>
      <Button size='sm' variant='ghost' aria-labe='upvote'>
        <ArrowBigUp className={cn('h-5 w-5 text-zinc-700', { 'text-emerald-500 fill-emerald-500': currentVote === 'UP' })} />{' '}
      </Button>
      <p className='text-center py-2 font-medium text-sm text-zinc-900'>{votesAmt}</p>{' '}
      <Button size='sm' variant='ghost' aria-labe='downvote'>
        <ArrowBigDown className={cn('h-5 w-5 text-zinc-700', { 'text-red-500 fill-red-500': currentVote === 'DOWN' })} />{' '}
      </Button>
    </div>
  )
}

export default PostVoteClient
