import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Edit-it',
  description: 'Create your alter persona with the help of AI magic',
}

export default function RootLayout({ children }) {
 return (
   <html lang="en" className="h-full w-full flex justify-center items-center">

  <ClerkProvider>
      <body className={`${inter.className} ` }>{children}</body>
  </ClerkProvider>
    </html>
  )
}