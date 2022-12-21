import { useState, useEffect } from 'react'
import Logo from '../../atoms/logo/Logo'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'
import ButtonNavbar from '../../atoms/button/ButtonNavbar'

function Navbar() {
  const [navColor, setNavColor] = useState('bg-transparent')
  const [changeTextColor, setChangeTextColor] = useState('text-white')

  const changeNavbarColor = () => {
    window.scrollY > 5
      ? setNavColor('bg-white/10 backdrop-blur-lg backdrop-filter')
      : setNavColor('bg-transparent')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  const changeTextColorLink = () => {
    window.scrollY > 5
      ? setChangeTextColor('text-black')
      : setChangeTextColor('text-white')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTextColorLink)
    return () => {
      window.removeEventListener('scroll', changeTextColorLink)
    }
  }, [])

  return (
    <>
      <nav className='sticky top-0 z-50 -mt-36'>
        <div className='relative'>
          <div
            className={`layout flex flex-row items-center justify-between py-6 transition-all duration-300 ease-in-out md:py-8 ${navColor}`}
          >
            <div className='flex items-center gap-14'>
              <a href='/'>
                <Logo
                  className={`text-lg font-bold text-white ${changeTextColor}`}
                />
              </a>

              <div className='hidden md:block'>
                <ul className='flex items-center gap-12'>
                  <LinkNavbar />
                </ul>
              </div>
            </div>

            {/* Button Mobile */}
            <div className='block md:hidden'>
              <ButtonNavbar />
            </div>

            <div className='hidden md:block'>
              <ul className='flex items-center gap-4'>
                <li
                  className={`font-dmsans text-base font-bold ${changeTextColor}`}
                >
                  <a href='#'>Login</a>
                </li>

                <li className='rounded-md bg-white/60 py-2 px-5 font-dmsans text-base font-bold text-gray-900'>
                  <a href='#'>Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
