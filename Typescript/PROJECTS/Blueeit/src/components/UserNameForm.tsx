'use client'

import { UsernameRequest, UsernameValidators } from '@/lib/validators/username'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card'
import { Label } from './ui/label'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

interface UserNameFormProps {
  user: Pick<User, 'id' | 'username'>
}

const UserNameForm: FC<UserNameFormProps> = ({ user }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UsernameRequest>({
    resolver: zodResolver(UsernameValidators),
    defaultValues: {
      name: user?.username || '',
    },
  })
  const router = useRouter()
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async ({ name }: UsernameRequest) => {
      const payload: UsernameRequest = {
        name,
      }
      const { data } = await axios.patch('/api/username', payload)
      return data
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          //409: conflict with the current state of a resource
          return toast({
            title: 'Username already taken',
            description: 'Please try another name',
            variant: 'destructive',
          })
        }
      }
      return toast({
        title: 'Something went wrong',
        description: 'Please try again',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      toast({
        title: 'Username updated',
        description: 'Your username has been updated successfully',
      })
      router.refresh()
    },
  })
  return (
    <form onSubmit={handleSubmit((e) => updateUser(e))}>
      <Card>
        <CardHeader>
          <CardTitle>Your username</CardTitle>
          <CardDescription>Please enter a username to display</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='relatve grid gap-'>
            <div className='absolute top-0 left-0 w-8 h-8 grid place-items-center'>
              <span className='text-sm text-zinc-400'>u/</span>
            </div>
            <Label className='sr-only' htmlFor='name'>
              Name
            </Label>
            <Input id='name' className='w-[400px] pl-600' size={32} {...register('name')} />
            {errors?.name && <span className='text-red-400 text-sm'>{errors.name.message}</span>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type='submit' isLoading={isLoading}>
            Change Name
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default UserNameForm
