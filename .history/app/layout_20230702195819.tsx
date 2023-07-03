import './globals.css'
import ModalProvider from '@/providers/ModalProvider'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ToasterProvider from '@/providers/ToasterProvider'
const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'spotify clone',
  description: 'listen to music',
}

export default afunction RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
          
        </SupabaseProvider>
      </body>
    </html>
  )
}
