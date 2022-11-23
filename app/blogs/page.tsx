import { compareDesc } from "date-fns"
import { allBlogs, Blog } from "contentlayer/generated"
import BCard from "@components/BCard"
import React from 'react'

export default async function Blogs() {
  const blogs: Blog[] = await allBlogs.sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-5 py-10">
      <h1 className={`px-5 text-3xl font-bold tracking-wide`}>Blog Page</h1>
      {blogs.map((blog: Blog) => (
        <BCard key={blog._id} blog={blog}/>
      ))}
    </div>
  )
}
