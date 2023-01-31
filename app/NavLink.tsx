"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import cn from "clsx"

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  let segment = useSelectedLayoutSegment()
  let active = segment == null ? href == "/" : href == `/${segment}`
  return (
    <p
      className={cn(
        `text-xl font-semibold md:tracking-wide`,
        active && "underline",
      )}
    >
      <Link href={href}>{children}</Link>
    </p>
  )
}
