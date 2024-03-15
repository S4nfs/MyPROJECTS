'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { CreateSubredditPayload } from '@/lib/validators/subreddit'

const Page = () => {
  const [input, setInput] = useState<string>('')
  const router = useRouter()
  const { mutate: createCommunity, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateSubredditPayload = {
        name: input,
      }
      const { data } = await axios.post('/api/subreddit', payload)
      return data as string
    },
  })
  return (
    <div className='cotainer flex items-center h-full max-w-3xl mx-auto'>
      <div className='relative bg-white w-full h-fit p-4 rounded-lg space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Create a Community</h1>
        </div>
        <hr className='bg-zinc-500 h-px' />
        <div>
          <p className='text-lg font-medium'>Name </p>
          <p className='text-xs pb-2'>Community names including capitalization cannot be changed.</p>
          <div className='relative'>
            <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center'>r/</p>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Name' className='pl-6' />
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <Button variant='subtle' onClick={() => router.back()}>
            Cancel
          </Button>
          <Button isLoading={isLoading} disabled={input.length === 0} onClick={() => createCommunity()} variant='subtle'>
            Create Community
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page
