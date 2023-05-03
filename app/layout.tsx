import React from "react"
import NavBar from "./NavBar"
import Footer from "@components/Footer"
import Analytics from "@components/Analytics"
import { Metadata } from "next"
import { ThemeProvider } from "@components/ThemeProvider"

import "tailwindcss/tailwind.css"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: {
    template: "AJ Kulundu - %s",
    default: "AJ Kulundu - Developer & Writer",
  },
  description: "Fullstack web developer and writer",
  openGraph: {
    images: "https://ajkulundu.com/api/og",
    url: "https://ajkulundu.com",
    siteName: "AJ Kulundu",
    type: "website",
    description: "AJ Kulundu - Developer & Writer",
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AJKulundu",
    title: "AJ Kulundu - Developer & Writer",
    description: "Fullstack web developer and writer",
    creator: "@AJKulundu",
    images: {
      url: "https://ajkulundu.com/api/og.png",
      alt: "AJ Kulundu - Developer & Writer",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 dark:bg-neutral-900  `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="sticky top-0 z-20 w-full bg-neutral-100 py-6 shadow dark:bg-neutral-900">
            <NavBar />
          </div>
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
