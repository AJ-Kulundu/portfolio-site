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
    <footer className="flex flex-col mx-auto mb-8 w-full max-w-2xl">
        <hr className="border-2 mb-4 border-neutral-200 dark:border-neutral-800" />
    <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-3">
      <div className="flex flex-col space-y-2 md:space-y-4">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/tweets">Tweets</FooterLink>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/">Home</FooterLink>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4">
        <FooterLink href="/">Github</FooterLink>
        <FooterLink href="/">Twitter</FooterLink>
        <FooterLink href="/">LinkedIn</FooterLink>
        <FooterLink href="/">Email</FooterLink>
        <FooterLink href="/">Medium</FooterLink>
      </div>
    </div>
    </footer>
  )
}

export default Footer;
