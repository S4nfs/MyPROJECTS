'use client'
import React from 'react'
import { Button } from './ui/Button'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CloseModal = () => {
  const router = useRouter()
  return (
    <Button aria-label='close modal' variant='subtle' className='h-6 e-6 p-0 rounded-md'>
      <X className='h-4 w-4' onClick={() => router.back()} />
    </Button>
  )
}

export default CloseModal
