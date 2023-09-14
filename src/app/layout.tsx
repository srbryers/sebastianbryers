import './globals.css'
import type { Metadata } from 'next'
import { Kadwa } from 'next/font/google'
import { Header, Footer } from '@/app/components'
import { routes } from '@/utils/routes'

const kadwa = Kadwa({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Sebastian Bryers',
  description: 'Technologist, entrepreneur.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">

      <body className={kadwa.className}>
        {/* Header */}
        <Header routes={routes}></Header>
        {/* Content */}
        <div className="px-8">
          {children}
        </div>
        {/* Footer */}
        <Footer></Footer>
      </body>

    </html>
  )
}
