import React from "react"
import { Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import Link from "next/link"

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={blog.url} passHref>
      <a className="mx-auto flex w-full flex-col items-start space-y-2 rounded-2xl bg-neutral-900/5 p-6 shadow-sm hover:bg-neutral-900/20 dark:bg-neutral-100/5 hover:dark:bg-neutral-100/20">
        <h1 className="text-xl font-semibold tracking-wide">{blog.title}</h1>
        <div className="flex flex-row">
          <span className="text-neutral-900/50 dark:text-neutral-100/50">
            {formattedDate(blog.date)}
          </span>
        </div>
        <span className="whitespace-pre-wrap text-lg font-medium">
          {blog.description}
        </span>
        <span className="text-neutral-900/50 dark:text-neutral-100/50">
          {blog.readingTime.text}
        </span>
      </a>
    </Link>
  )
}

export default BlogCard
