import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { useTheme } from "next-themes"
import Footer from "./Footer"
import { motion, AnimatePresence } from "framer-motion"

const svgVariants = {
  initial: {
    rotate: -90,
    opacity: 0.5,
  },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    rotate: 90,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}
const pathVariants = {
  initial: {
    opacity: 0.5,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const NavItem = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} passHref>
      <a className="text-lg font-semibold md:tracking-wide">{children}</a>
    </Link>
  )
}

const Container = (props: { [x: string]: any; children: any }) => {
  const { children, ...customMeta } = props
  const meta = {
    title: "AJ Kulundu - Developer & Writer",
    description: "Softare Engineer and Technical writer",
    type: "website",
    imageURL:"",
    URL:"ajkulundu.com",
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
        <motion.button
          key={"dark"}
          className="rounded-xl bg-neutral-200/50 p-2 dark:bg-neutral-800/50"
          onClick={() => setTheme("dark")}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            variants={svgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              variants={pathVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </motion.svg>
        </motion.button>
      )
    } else {
      return (
        <motion.button
          key={"light"}
          className="rounded-xl bg-neutral-200/50 p-2 dark:bg-neutral-800/50"
          onClick={() => setTheme("light")}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            variants={svgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              variants={pathVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </motion.svg>
        </motion.button>
      )
    }
  }

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title}/>
        <meta property="og:image" content={meta.imageURL} />
        <meta property="og:url" content={meta.URL} /> 
        <meta property="og:site_name" content="AJ Kulundu" />
        <meta name="twitter:site" content="@AJKulundu" />
        <meta name="robots" content="follow, index" />
      </Head>
      <div className="flex w-full flex-col justify-center px-8">
        <div className="sticky top-0 z-20 w-full  bg-neutral-100 py-6  dark:bg-neutral-900 ">
          <nav className=" mx-auto flex w-full max-w-2xl flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-4">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/blog">Blog</NavItem>
              <NavItem href="/tweets">Tweets</NavItem>
            </div>
            <AnimatePresence initial={false} mode="wait">
              {renderTheme()}
            </AnimatePresence>
          </nav>
        </div>
        <main className="flex flex-col bg-neutral-100 dark:bg-neutral-900">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Container
