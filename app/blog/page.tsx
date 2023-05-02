import { compareDesc } from "date-fns"
import { allBlogs, Blog } from "contentlayer/generated"
import BCard from "@components/BCard"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
  openGraph: {
    images: "https://ajkulundu.com/api/og?title=Blog",
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
      url: "https://ajkulundu.com/api/og?title=Blog",
      alt: "AJ Kulundu - Blog",
    },
  },
}

export default async function Blogs() {
  const blogs: Blog[] = await allBlogs.sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-5 py-10">
      <h1 className={`px-5 text-3xl font-bold tracking-wide`}>Blog Page</h1>
      {blogs.map((blog: Blog) => (
        <BCard key={blog._id} blog={blog} />
      ))}
    </div>
  )
}
