import React from "react";
import { Inter } from "@next/font/google"
import NavBar from "./NavBar";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
})

import "tailwindcss/tailwind.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-inter bg-neutral-100 dark:bg-neutral-900`}> 
      <body className={`${inter.variable} font-inter bg-neutral-100 dark:bg-neutral-900`}>
      <div className="sticky top-0 z-20 w-full  bg-neutral-100 py-6  dark:bg-neutral-900 ">
        <NavBar />
        </div>
        {children}
      </body>    
    </html>
  )
}
