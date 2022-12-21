import Button from '../../../atoms/button/Button'

function Signup() {
  return (
    <>
      <div className='grid items-center py-12 md:grid-flow-col lg:gap-24 2xl:gap-[46rem]'>
        <div>
          <h4 className='text-xl font-bold leading-loose text-gray-900 sm:text-2xl'>
            Sign Up and Start Chatting Today
          </h4>

          <p className='w-10/12 py-3 font-sourcesans text-base font-normal text-text-secondary lg:w-full'>
            Don't wait any longer to start improving the user experience on your
            website. Sign up for our live chat product and start connecting with
            your customers in real-time.
          </p>
        </div>

        <div className='flex md:justify-end'>
          <Button nameButton='Sign Up Now' />
        </div>
      </div>
    </>
  )
}

export default Signup
