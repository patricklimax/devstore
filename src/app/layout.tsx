import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'
import { AuthProvider } from '@/providers/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevStore',
  description: 'Ecommerce da DevStore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className='flex flex-col h-full md:max-w-[70rem] mx-auto'>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
