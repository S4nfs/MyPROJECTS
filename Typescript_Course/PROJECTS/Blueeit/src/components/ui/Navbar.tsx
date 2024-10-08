import Link from 'next/link'
import { Icons } from './Icons'
import { buttonVariants } from './Button'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import SearchBar from '../SearchBar'
import Image from 'next/image'
import logo from '../../../public/Blueeit.png'
const Navbar = async () => {
  const session = await getAuthSession()
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo  */}
        <Link href='/' className='flex gap-2 items-center'>
          <Image src={logo} className='h-8 w-8 sm:h-6 sm:w-6' alt='Blueeit - By S4nfs' />
          <p className='hidden text-zinc-700 text-sm font-medium md:block '> Blueeit</p>
        </Link>
        {/* search bar  */}
        <SearchBar />
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href={'/sign-in'} className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
