function CardPrice() {
  const data = [
    {
      title: 'Starter',
      price: '$9.99/month',
      checksvg: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_3_281)'>
            <path
              d='M10 18.3334C14.6025 18.3334 18.3334 14.6026 18.3334 10.0001C18.3334 5.39758 14.6025 1.66675 10 1.66675C5.39752 1.66675 1.66669 5.39758 1.66669 10.0001C1.66669 14.6026 5.39752 18.3334 10 18.3334Z'
              stroke='#4635F3'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7.5 9.99992L9.16667 11.6666L12.5 8.33325'
              stroke='#4635F3'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_281'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
      list1: 'Real-time chat',
      list2: 'Customization options',
      list3: 'File sharing',
      list4: 'Visitor tracking',
    },
    {
      title: 'Professional',
      price: '$29.99/month',
      checksvg: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_3_281)'>
            <path
              d='M10 18.3334C14.6025 18.3334 18.3334 14.6026 18.3334 10.0001C18.3334 5.39758 14.6025 1.66675 10 1.66675C5.39752 1.66675 1.66669 5.39758 1.66669 10.0001C1.66669 14.6026 5.39752 18.3334 10 18.3334Z'
              stroke='#F5AC76'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7.5 9.99992L9.16667 11.6666L12.5 8.33325'
              stroke='#F5AC76'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_281'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
      list1: 'All features in the "Starter" plan',
      list2: 'Mobile app',
      list3: 'Integration with other tools',
      list4: 'Multilingual support',
    },
    {
      title: 'Enterprise',
      price: '$99.99/month',
      checksvg: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_3_281)'>
            <path
              d='M10 18.3334C14.6025 18.3334 18.3334 14.6026 18.3334 10.0001C18.3334 5.39758 14.6025 1.66675 10 1.66675C5.39752 1.66675 1.66669 5.39758 1.66669 10.0001C1.66669 14.6026 5.39752 18.3334 10 18.3334Z'
              stroke='#FF5391'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M7.5 9.99992L9.16667 11.6666L12.5 8.33325'
              stroke='#FF5391'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_3_281'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
      list1: 'All features in the "Professional" plan',
      list2: 'Dedicated account manager',
      list3: 'Premium support',
      list4: 'Custom integration options',
    },
  ]

  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          <div className='rounded-md bg-white shadow-sm shadow-gray-200'>
            <h6
              className={`rounded-t-md py-4 px-3 text-center font-dmsans text-sm font-bold uppercase leading-5 text-white ${
                index === 0
                  ? 'bg-primary-blue'
                  : index === 1
                  ? 'bg-primary-orange'
                  : index === 2
                  ? 'bg-primary-pink'
                  : 'bg-primary-blue'
              }`}
            >
              {item?.title}
            </h6>

            <div className='p-8'>
              <h4 className='text-center font-dmsans text-2xl font-bold leading-10 text-black md:text-3xl lg:text-2xl xl:text-3xl'>
                {item?.price}
              </h4>

              <div className='my-5 border-b-[1px] border-gray-200'></div>

              <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-3'>
                  {item?.checksvg}

                  <p className='font-dmsans font-medium leading-6 text-text-secondary/60 lg:text-xs 2xl:text-base'>
                    {item?.list1}
                  </p>
                </li>

                <li className='flex items-center gap-3'>
                  {item?.checksvg}

                  <p className='font-dmsans font-medium leading-6 text-text-secondary/60 lg:text-xs 2xl:text-base'>
                    {item?.list2}
                  </p>
                </li>

                <li className='flex items-center gap-3'>
                  {item?.checksvg}

                  <p className='font-dmsans font-medium leading-6 text-text-secondary/60 lg:text-xs 2xl:text-base'>
                    {item?.list3}
                  </p>
                </li>

                <li className='flex items-center gap-3'>
                  {item?.checksvg}

                  <p className='font-dmsans font-medium leading-6 text-text-secondary/60 lg:text-xs 2xl:text-base'>
                    {item?.list4}
                  </p>
                </li>
              </ul>

              <button
                className={`mt-5 h-auto w-full rounded-md p-3 font-dmsans text-sm font-medium leading-6 text-white ${
                  index === 0
                    ? 'bg-primary-blue'
                    : index === 1
                    ? 'bg-primary-orange'
                    : index === 2
                    ? 'bg-primary-pink'
                    : 'bg-primary-blue'
                }`}
              >
                Choose
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardPrice
