import Navbar from "@/components/Navbar"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: 'Hunting Coder',
  description: 'Hunting Coder - blog website',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Toaster position="top-right" toastOptions={{
          success:{
            iconTheme:{
              primary:"#0053a6"
            }
          },error:{
            iconTheme:{
              primary:"#0053a6"
            }
          }
        }}/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
