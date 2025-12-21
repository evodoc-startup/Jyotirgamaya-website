import Image from 'next/image'
import React from 'react'

function Map () {
  return (
    <div className='relative w-full h-96 md:h-[700px] lg:h-[900px]  bg-[#faf5f7]'>
      <Image
        src='/map.png'
        fill
        alt='Map illustration'
        className='object-contain mx-auto bg-[#faf5f7]'
      />
    </div>
  )
}

export default Map
