
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { Footer, Header } from '../components';
import { cx } from '../utils';
import siteMetadata from '../utils/siteMetaData';
import Script from 'next/script';

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
});
const rheaski = localFont({
  src: [
    {
      path: '../../public/fonts/Rheaski-Regular.ttf',
      weight: '400'
    }
  ],
  variable: '--font-rheaski'
});

export const metadata = {

  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `$s | ${siteMetadata.title}`, // title passed in + site title
    default: siteMetadata.title // A default is always requried when creating a template
  },
  // Helps the crawlers to 
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true, // true will allow the website to be indexed by the search engines
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter:{
    card:'summary_large_image',
    title: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, anurati.variable, rheaski.variable, "font-an bg-light dark:bg-dark")}>
        <Script>
        {`
          if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
