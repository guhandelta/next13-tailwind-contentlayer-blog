"use client";
import Link from 'next/link'
import Logo from './Logo'
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from '../Icon'
import siteMetadata from '@/src/utils/siteMetaData'
import { useThemeSwitch } from '../Hooks/useThemeSwitch';

const Header = () => {

  const [ mode, setMode ] = useThemeSwitch();

  return (
    <header className="w-full px-10 p-4 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-12 border border-solid border-dark rounded-full font-medium text-xl capitalize flex items-center fixed top-12 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm z-50">
        <Link href="/" className='mr-2'>Home</Link>
        <Link href="/about" className='mx-2'>About</Link>
        <Link href="/contact" className='mr-2'>Contact</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon />
        </button>
      </nav>
      <div className="flex p-4">
        <a target='_blank' className='inline-block m-6 h-6 mr-4' href={siteMetadata.linkedin}>
          <LinkedInIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a target='_blank' className='inline-block m-6 h-6 mr-4' href={siteMetadata.github}>
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a target='_blank' className='inline-block m-6 h-6 mr-4' href={siteMetadata.twitter}>
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  )
}

export default Header