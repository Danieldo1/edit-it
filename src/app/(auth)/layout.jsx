import { ClerkProvider } from "@clerk/nextjs";
import { Kanit } from "next/font/google";
import "../globals.css";
const inter = Kanit({ subsets: ["latin"],weight:["100","200","300","400","500","600","700","800","900"] });

export const metadata = {
  title: 'AIterImage',
  description: 'Create your alter persona with the help of AI magic',
}

export default function RootLayout({ children }) {
 return (
   <html lang="en" className="h-screen">

  <ClerkProvider>
      <body className={`${inter.className} ` }>{children}</body>
  </ClerkProvider>
    </html>
  )
}