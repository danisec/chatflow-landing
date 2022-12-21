import { useState, useEffect } from 'react'

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
      <li
        className={`font-sourcesans text-base font-semibold ${changeActiveNav}`}
      >
        <a href='#home'>Home</a>
      </li>

      <li
        className={`font-sourcesans text-base font-normal ${changeTextColor}`}
      >
        <a href='#pricing'>Pricing</a>
      </li>

      <li
        className={`font-sourcesans text-base font-normal ${changeTextColor}`}
      >
        <a href='#'>Support</a>
      </li>

      <li
        className={`font-sourcesans text-base font-normal ${changeTextColor}`}
      >
        <a href='#'>Contact Us</a>
      </li>
    </>
  )
}

export default LinkNavbar
