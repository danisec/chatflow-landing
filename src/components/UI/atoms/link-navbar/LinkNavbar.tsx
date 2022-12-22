import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function LinkNavbar() {
  const [changeTextColor, setChangeTextColor] = useState(
    'text-black md:text-white/70'
  )
  const [changeActiveNav, setChangeActiveNav] = useState(
    'text-black md:text-white'
  )

  const changeTextColorLink = () => {
    window.scrollY > 5
      ? setChangeTextColor('text-black')
      : setChangeTextColor('text-black/70 md:text-white/70')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTextColorLink)
    return () => {
      window.removeEventListener('scroll', changeTextColorLink)
    }
  }, [])

  const changeActiveNavLink = () => {
    window.scrollY > 5
      ? setChangeActiveNav('text-black')
      : setChangeActiveNav('text-black md:text-white')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeActiveNavLink)
    return () => {
      window.removeEventListener('scroll', changeActiveNavLink)
    }
  }, [])

  return (
    <>
      <Link
        to={'/#home'}
        className={`font-sourcesans text-base font-semibold ${changeActiveNav}`}
      >
        Home
      </Link>

      <Link
        to={'/#pricing'}
        className={`font-sourcesans text-base font-normal ${changeTextColor}`}
      >
        Pricing
      </Link>

      <Link
        to={'/#'}
        className={`font-sourcesans text-base font-normal ${changeTextColor}`}
      >
        Support
      </Link>

      <Link
        to={'/#'}
        className={`font-sourcesans text-base font-normal ${changeTextColor}`}
      >
        Contact Us
      </Link>
    </>
  )
}

export default LinkNavbar
