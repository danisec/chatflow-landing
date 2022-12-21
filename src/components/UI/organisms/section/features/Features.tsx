import chatFlow from '../../../../../assets/img/experience/chatflow.svg'
import Button from '../../../atoms/button/Button'

function Features() {
  return (
    <>
      <div className='layout grid items-center py-12 md:grid-cols-2'>
        <div>
          <h2 className='text-xl font-bold leading-normal text-gray-900 sm:text-3xl md:text-2xl xl:text-4xl'>
            Experience the Power of Our Live Chat
          </h2>

          <p className='py-3 font-sourcesans text-base font-normal leading-6 text-black/60'>
            See for yourself how our live chat can help you connect with your
            customers and improve their experience on your website. Check out a
            screenshot of our live chat in action.
          </p>

          <button className='my-10 h-12 w-5/12 rounded-full bg-black font-sourcesans text-lg font-normal leading-8 text-white ms:h-14 ms:w-40'>
            Book a Demo
          </button>

          <div className='flex flex-row items-center gap-8'>
            <div>
              <h6 className='font-sourcesans text-base font-semibold leading-7 text-gray-900'>
                Improving Customer Support
              </h6>

              <p className='py-2 font-sourcesans text-sm font-normal leading-4 text-black/60'>
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>

            <div>
              <h6 className='font-sourcesans text-base font-semibold leading-7 text-gray-900'>
                Boosting Sales
              </h6>

              <p className='py-2 font-sourcesans text-sm font-normal leading-4 text-black/60'>
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>
          </div>
        </div>

        <div className='m-auto'>
          <img src={chatFlow} alt='ChatFlow' />
        </div>
      </div>
    </>
  )
}

export default Features
