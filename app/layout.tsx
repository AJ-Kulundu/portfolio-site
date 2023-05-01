import React from "react"
import NavBar from "./NavBar"
import Footer from "@components/Footer"
import Analytics from "@components/Analytics"

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
        className={`bg-neutral-100 font-inter dark:bg-neutral-900`}
      >
        <div className="sticky top-0 z-20 w-full  bg-neutral-100 py-6  shadow dark:bg-neutral-900">
          <NavBar />
        </div>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
