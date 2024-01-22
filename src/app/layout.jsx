import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edit-it",
  description: "Create your alter persona with the help of AI magic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
        <div className="max-w-full px-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-8xl w-full h-full mx-auto"> 
        <Navbar />
        {children}
        </div>
      </ThemeProvider>
      </body>
    </ClerkProvider>
    </html>
  );
}
