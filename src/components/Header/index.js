import Link from 'next/link'
import Logo from './Logo'
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from '../Icon'

const Header = () => {
  return (
    <header className="w-full px-10 p-4 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-12 border border-solid border-dark rounded-full font-medium text-xl capitalize flex items-center fixed top-12 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/" className='mr-2'>Home</Link>
        <Link href="/about" className='mx-2'>About</Link>
        <Link href="/contact" className='mr-2'>Contact</Link>
        <button>
          <SunIcon className="hover:animate-spin  " />
        </button>
      </nav>
      <div className="flex p-4">
        <a target='_blank' className='inline-block m-6 h-6 mr-4' href="https://linkedin.com/in/guhaprasaanthnandagopal">
          <LinkedInIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a target='_blank' className='inline-block m-6 h-6 mr-4' href="https://github.com/guhandelta">
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a target='_blank' className='inline-block m-6 h-6 mr-4' href="https://twitter.com/guhandelta">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  )
}

export default Header