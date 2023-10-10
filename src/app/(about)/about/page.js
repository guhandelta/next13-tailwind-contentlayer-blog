import AboutCoverSection from '@/src/components/About/AboutCoverSection'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <AboutCoverSection />
        <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-black">
            Have project in mind? React out to me from <Link href="/contact" className='!underline underline-offset-2'>here</Link>, and let's make it happen'
        </h2>
    </>
  )
}

export default AboutPage