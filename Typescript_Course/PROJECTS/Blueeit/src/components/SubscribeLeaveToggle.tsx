'use client'
import React, { startTransition } from 'react'
import { Button } from './ui/Button'
import { useMutation } from '@tanstack/react-query'
import { SubredditSubscriptionValidator, SubscribeToSubredditPayload } from '@/lib/validators/subreddit'
import axios, { AxiosError } from 'axios'
import { useCustomToast } from '@/hooks/use-custom-toast'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
interface SubscribeLeaveToggleProps {
  subredditId: string
  subredditName: string
  isSubscribed: boolean
}
const SubscribeLeaveToggle: React.FC<SubscribeLeaveToggleProps> = ({ subredditId, subredditName, isSubscribed }) => {
  const { loginToast } = useCustomToast()
  const router = useRouter()
  const { mutate: subscribe, isLoading: isSubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      }
      const { data } = await axios.post('/api/subreddit/subscribe', payload)
      return data as string
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return loginToast()
        }
      }
      return toast({
        title: 'Something went wrong',
        description: 'Please try again later',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh()
      })
      return toast({
        title: 'Subscribed',
        description: `You have successfully subscribed to the r/${subredditName}`,
      })
    },
  })

  //unsubscribe
  const { mutate: unSubscribe, isLoading: isUnsubLoading } = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      }
      const { data } = await axios.post('/api/subreddit/unsubscribe', payload)
      return data as string
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return loginToast()
        }
      }
      return toast({
        title: 'Something went wrong',
        description: 'Please try again later',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      startTransition(() => {
        router.refresh()
      })
      return toast({
        title: 'Unsubscribed',
        description: `You have successfully unsubscribed to the r/${subredditName}`,
      })
    },
  })
  return isSubscribed ? (
    <Button isLoading={isUnsubLoading} className='w-full mt-1 mb-4' onClick={() => unSubscribe()}>
      Leave Community
    </Button>
  ) : (
    <Button className='w-full mt-1 mb-4' onClick={() => subscribe()}>
      Join
    </Button>
  )
}

export default SubscribeLeaveToggle
