import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
