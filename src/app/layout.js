
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { Header } from '../components';
import { cx } from '../utils';

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in"});

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr"});

const anurati = localFont({
  src: [
    {
      path: '../../public/fonts/Anurati-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-anurati'
})
const rheaski = localFont({
  src: [
    {
      path: '../../public/fonts/Rheaski-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-rheaski'
})

export const metadata = {
  title: 'Mind of Guha',
  description: 'A responsive blog application made using NextJS 13 & TailwindCSS, with ContentLayer to manage the blog\'s content and media',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, anurati.variable, rheaski.variable, "font-an bg-light dark:bg-dark")}>
        <Header />
        {children}
      </body>
    </html>
  )
}
