import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edit-it",
  description: "Create your alter persona with the help of AI magic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-8xl w-full h-screen mx-auto"> 
        <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
