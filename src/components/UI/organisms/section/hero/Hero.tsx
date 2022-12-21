import chatImg from '../../../../../assets/img/hero/app-chat.svg'
import Button from '../../../atoms/button/Button'

function Hero() {
  return (
    <>
      <div className='grid items-center md:grid-cols-2'>
        <div>
          <h2 className='w-full text-2xl font-semibold leading-relaxed text-white ms:text-4xl ms:leading-relaxed md:text-2xl md:leading-relaxed lg:text-4xl lg:leading-relaxed 2xl:text-6xl 2xl:leading-tight'>
            Improve your customer experience with real-time assistance
          </h2>

          <p className='mt-3 font-sourcesans text-base font-normal leading-8 text-white/60 sm:w-10/12 2xl:w-8/12 2xl:text-lg'>
            Our live chat software helps you connect with your customers
            instantly, boosting sales and improving customer satisfaction. Try
            it out today and see the difference it can make for your business.
          </p>

          <div className='mt-8 flex flex-row gap-6 ms:gap-12'>
            <Button nameButton='Get Started' />

            <button className='flex h-12 w-6/12 items-center justify-center gap-2 rounded-full bg-white/5 ms:h-14 ms:w-48'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 4.83167C5 4.0405 5.87525 3.56266 6.54076 3.99049L17.6915 11.1588C18.3038 11.5525 18.3038 12.4475 17.6915 12.8412L6.54076 20.0095C5.87525 20.4373 5 19.9595 5 19.1683V4.83167Z'
                  fill='white'
                />
              </svg>
              <span className='font-sourcesans text-lg font-normal leading-8 text-white'>
                See in Action
              </span>
            </button>
          </div>
        </div>

        <div className='m-auto hidden md:block'>
          <img src={chatImg} alt='app-chat' />
        </div>
      </div>
    </>
  )
}

export default Hero
