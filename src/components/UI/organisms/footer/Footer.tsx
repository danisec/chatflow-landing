function Footer() {
  const data = [
    {
      title: 'Products',
      list1: 'Download App',
      list2: 'Integrations',
      list3: 'Case Studies',
      list4: 'API',
    },
    {
      title: 'Company',
      list1: 'About Us',
      list2: 'Contact',
      list3: 'Privacy Policy',
      list4: 'Terms of Service',
      list5: 'Help',
    },
    {
      title: 'Essentials',
      list1: 'Documentation',
      list2: 'Playground',
      list3: 'Sandbox',
      list4: 'Source Code',
    },
    {
      title: 'Get In Touch',
      list1: 'Twitter',
      list2: 'Facebook',
      list3: 'Dribbble',
    },
  ]
  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          <div>
            <h6 className='font-sourcesans text-sm font-bold uppercase leading-5 text-text-secondary/60'>
              {item?.title}
            </h6>

            <ul className='flex flex-col gap-2 pt-5'>
              <li className='font-sourcesans text-base font-normal leading-7 text-text-secondary/80'>
                {item?.list1}
              </li>

              <li className='font-sourcesans text-base font-normal leading-7 text-text-secondary/80'>
                {item?.list2}
              </li>

              <li className='font-sourcesans text-base font-normal leading-7 text-text-secondary/80'>
                {item?.list3 ? item?.list3 : ''}
              </li>

              <li className='font-sourcesans text-base font-normal leading-7 text-text-secondary/80'>
                {item?.list4 ? item?.list4 : ''}
              </li>

              <li className='font-sourcesans text-base font-normal leading-7 text-text-secondary/80'>
                {item.list5 ? item.list5 : ''}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default Footer
