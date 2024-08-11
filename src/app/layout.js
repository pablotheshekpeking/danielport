// app/layout.js
import { Providers } from './providers'
import { Work_Sans } from '@next/font/google';

// Initialize the font
const workSans = Work_Sans({
  weight: ['400', '500', '700'], // Specify the weights you need
  subsets: ['latin'],            // Specify the character sets you need
  display: 'swap',               // Optional: Specify the font display behavior
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
