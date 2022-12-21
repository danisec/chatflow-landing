import React from 'react'

function Button({ nameButton }: { nameButton: string }) {
  return (
    <>
      <button className='h-12 w-5/12 rounded-full bg-black font-sourcesans text-lg font-normal leading-8 text-white ms:h-14 ms:w-40'>
        {nameButton}
      </button>
    </>
  )
}

export default Button
