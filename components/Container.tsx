import React, { FC, useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"
import { useTheme } from "next-themes"
import Footer from "./Footer"

const NavItem = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} passHref>
      <a className="text-lg font-semibold md:tracking-wide">{children}</a>
    </Link>
  )
}

const Container: FC = (props) => {
  const { children, ...customMeta } = props
  const meta = {
    title: "AJ Kulundu - Developer, writer",
    description: "Softare Engineer and Technical writer",
    type: "website",
    ...customMeta,
  }
  const [isMounted, setIsMounted] = useState(false)
  const { systemTheme, setTheme, theme } = useTheme()
  useEffect(() => {
    setIsMounted(true), [isMounted]
  })

  const renderTheme = () => {
    if (!isMounted) return null

    const currentTheme = theme == "system" ? systemTheme : theme

    if (currentTheme == "light") {
      return (
        <MoonIcon
          className="h-6 w-6 text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          onClick={() => setTheme("dark")}
          role="button"
        />
      )
    } else {
      return (
        <SunIcon
          className="h-6 w-6 text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          onClick={() => setTheme("light")}
          role="button"
        />
      )
    }
  }

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="AJ Kulundu" />
        <meta name="twitter:site" content="@AJKulundu" />
        <meta name="robots" content="follow, index" />
      </Head>
      <div className="flex w-full flex-col justify-center px-8">
        <nav className="relative mx-auto flex w-full max-w-2xl flex-row items-center justify-between bg-neutral-100 py-6  dark:bg-neutral-900">
          <div className="flex flex-row items-center gap-x-4">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/tweets">Tweets</NavItem>
          </div>
          <div className="rounded-xl bg-neutral-200/50 p-2 dark:bg-neutral-800/50">
            {renderTheme()}
          </div>
        </nav>
        <main className="flex flex-col justify-center bg-neutral-100 dark:bg-neutral-900">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Container
