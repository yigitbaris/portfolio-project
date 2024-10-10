import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Mulish, Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const mulish = Mulish({ weight: ['400', '500'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yiğit Barış',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} `}>
        <div className='flex flex-col '>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
