import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'

function NavbarMobile() {
  return (
    <>
      <div className='absolute top-20 z-50 -ml-64 h-auto w-72 rounded-md bg-white shadow-sm shadow-gray-100 ms:-ml-[23rem] ms:w-96'>
        <div className='m-4'>
          <div>
            <ul className='flex flex-col gap-4 py-3 md:flex-row md:items-center'>
              <LinkNavbar />
            </ul>

            <ul className='flex flex-row items-center gap-5'>
              <li className={`font-dmsans text-base font-bold`}>
                <a href='#'>Login</a>
              </li>

              <li className='rounded-md bg-white/60 py-2 px-5 font-dmsans text-base font-bold text-gray-900 shadow-md shadow-gray-100'>
                <a href='#'>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
