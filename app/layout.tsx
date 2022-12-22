import React from "react"
import { Inter } from "@next/font/google"
import NavBar from "./NavBar"
import Footer from "@components/Footer"
const inter = Inter({
  variable: "--font-inter",
})

import "tailwindcss/tailwind.css"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-neutral-100  dark:bg-neutral-900`}>
      <body
        className={`${inter.variable} bg-neutral-100 font-inter dark:bg-neutral-900`}
      >
        <div className="sticky top-0 z-20 w-full  bg-neutral-100 py-6  shadow dark:bg-neutral-900">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
