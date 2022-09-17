import React from "react"
import Link from "next/link"

const FooterLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} passHref>
      <a className="text-md tracking-normal">{children}</a>
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col">
      <hr className="mb-4 border-2 border-neutral-200 dark:border-neutral-800" />
      <div className=" flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 sm:py-12 md:py-0">
        <div className="flex flex-col space-y-4">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/tweets">Tweets</FooterLink>
        </div>
        <div className="flex flex-col space-y-4 md:mr-5">
          <FooterLink href="https://github.com/AJ-Kulundu">Github</FooterLink>
          <FooterLink href="https://twitter.com/AJKulundu">Twitter</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/james-kulundu-480034234/">LinkedIn</FooterLink>
          <FooterLink href="jameskulundu@gmail.com">Email</FooterLink>
          <FooterLink href="https://medium.com/@AJkulundu">Medium</FooterLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
