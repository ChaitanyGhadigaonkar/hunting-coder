import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
  title: 'Hunting Coder',
  description: 'Hunting Coder - blog website',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
