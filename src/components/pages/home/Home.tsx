import Hero from '../../UI/organisms/section/hero/Hero'
import CardFeatures from '../../UI/organisms/card/CardFeatures'
import Features from '../../UI/organisms/section/features/Features'
import CardPrice from '../../UI/organisms/card/CardPrice'
import Signup from '../../UI/organisms/section/signup/Signup'
import Footer from '../../UI/organisms/footer/Footer'

function Home() {
  const getYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <>
      <section
        id='home'
        className='m-0 max-h-full max-w-full bg-hero bg-cover bg-no-repeat lg:max-h-[140vh] xl:max-h-[120vh]'
      >
        <div className='layout py-44'>
          <Hero />
        </div>
      </section>

      <section className='layout py-24'>
        <div className='m-auto w-full ms:w-10/12 sm:w-11/12 md:w-7/12 lg:w-7/12 xl:w-8/12 2xl:w-5/12'>
          <h2 className='text-center text-xl font-bold leading-normal text-gray-900 sm:text-3xl md:text-2xl xl:text-4xl xl:leading-normal'>
            Powerful Features to Enhance Your Live Chat Experience
          </h2>

          <p className='py-3 text-center text-sm font-normal leading-6 text-gray-600 md:text-base'>
            Our live chat product is packed with features to help you connect
            with your customers and provide them with the support they need.
          </p>
        </div>

        <div className='bg-white py-10'>
          <div className='grid items-start gap-8 ms:grid-cols-2 md:grid-cols-3'>
            <CardFeatures />
          </div>
        </div>
      </section>

      <section className='bg-conic'>
        <Features />
      </section>

      <section id='pricing' className='layout bg-white py-24'>
        <div className='m-auto w-full'>
          <h2 className='text-center text-xl font-bold leading-snug text-gray-900 sm:text-3xl md:text-2xl xl:text-4xl'>
            Affordable Plans for Any Business
          </h2>

          <p className='m-auto w-full py-3 text-center text-sm font-normal leading-6 text-black/60 sm:text-base xl:w-8/12 2xl:w-5/12'>
            Our pricing plans are designed to be affordable for businesses of
            all sizes. From our "Starter" plan to our "Enterprise" option, we
            have a plan that will fit your budget and meet your live chat needs.
          </p>
        </div>

        <div className='grid items-center gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3'>
          <CardPrice />
        </div>
      </section>

      <section className='layout bg-white'>
        <Signup />
      </section>

      <footer className='layout bg-white'>
        <div className='py-12'>
          <div className='grid grid-cols-2 gap-7 sm:grid-cols-4'>
            <Footer />
          </div>

          <div className='border-b-[1px] border-gray-100 py-5'></div>

          <div className='py-5'>
            <p className='text-center font-sourcesans text-xs font-bold uppercase leading-4'>
              {`Copyright © ${getYear()} — Design By Nauval`}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
