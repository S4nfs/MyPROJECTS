import CloseModal from '@/components/CloseModal'
import SignUp from '@/components/SignUp'

const page = () => {
  return (
    <div className='fixed inset-0 bg-zinc-900/20 z-10'>
      <div className='container flex items-center h-full max-w-lg mx-auto'>
        <div className='relative bg-white w-full h-full  py-20 rounded-lg'>
          <div className='absolute top-4 right-4'>
            <CloseModal />
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  )
}

export default page
