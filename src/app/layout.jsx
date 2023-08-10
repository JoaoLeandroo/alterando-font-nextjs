import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: [
  '100',
  '300',
  '400',
  '500',
  '700',
  '900'
] })

export const metadata = {
  title: 'Alterando font no NextJS',
  description: 'alterando font',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
