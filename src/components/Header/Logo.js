import React from 'react'

import ProfileImg from '../../../public/profile-img.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className='flex text-dark items-center'>
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-2">
        <Image src={ProfileImg} alt="Guha" className="w-full h-auto rounded-full" />
      </div>
      <span className='font-bold text-xl text-orange-500'>Mind of Guha</span>
    </Link>
  )
}

export default Logo