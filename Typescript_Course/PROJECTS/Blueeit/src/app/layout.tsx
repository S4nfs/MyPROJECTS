import Navbar from "@/components/ui/Navbar"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
export const metadata = {
  title: "Blueeit",
  description: "A Reddit clone built with Next.js 13 and TypeScript.",
}

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("bg-white to-slate-900 antialiased light")}>
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-12">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
