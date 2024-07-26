import CustomFeed from '@/components/Customfeed'
import Generalfeed from '@/components/GeneralFeed'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthSession } from '@/lib/auth'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const session = getAuthSession()
  return (
    <>
      <h1 className='font-bold text-3xl md:text-4xl'>Your Feed</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
        {/* feed  */}
        {/* Its just typescript not recognizing the server component async behavoius as its quite new so we use to ignore that error saying "cannot be used as a JSX component."*/}

        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <Generalfeed />}
        {/* Subreddit info  */}
        <div className='overflow-hidden h-fit rounded-lg border border-gray-200 order-first'>
          <div className='bg-emerald-100 px-6 py-4'>
            <p className='font-semibold py-3 flex items-center gap-1.5'>
              <HomeIcon className='w-4 h-4' />
              Home
            </p>
          </div>

          <div className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p className='text-zinc-500'>Your cozy Blueeit home. Check your favourite communities here.</p>
            </div>
            <Link className={buttonVariants({ className: 'w-full mt-4 mb-6' })} href='/r/create'>
              Create Community
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
