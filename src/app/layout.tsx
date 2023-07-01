import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700', '500', '900', '100', '300'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mines',
  description: 'Mines Blaze',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='h-screen bg-[#0F1923] flex items-center justify-center'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
