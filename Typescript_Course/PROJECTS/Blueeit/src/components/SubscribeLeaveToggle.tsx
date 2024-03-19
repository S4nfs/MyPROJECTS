'use client'
import React from 'react'
import { Button } from './ui/Button'
import { useMutation } from '@tanstack/react-query'
import { SubredditSubscriptionValidator } from '@/lib/validators/subreddit'
import axios from 'axios'
interface SubscribeLeaveToggleProps {
  subreditId: string
}
const SubscribeLeaveToggle = ({ subreditId }: SubscribeLeaveToggleProps) => {
  const {} = useMutation({
    mutationFn: async () => {
      const payload: SubredditSubscriptionValidator = {
        subreditId,
      }
      const { data } = await axios.post('/api/subreddit/subscribe', payload)
      return data as string
    },
  })
  const isSubscribed = false
  return isSubscribed ? <Button className='w-full mt-1 mb-4'>Leave Community</Button> : <Button className='w-full mt-1 mb-4'>Join</Button>
}

export default SubscribeLeaveToggle
