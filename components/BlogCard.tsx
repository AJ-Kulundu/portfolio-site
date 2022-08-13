import React from "react"
import { Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"

const BlogCard = ({ blog }: { blog: Blog }) => {
    console.log(blog.slug)
  return (
    <div className="mx-auto flex flex-col items-start space-y-2 rounded-2xl bg-neutral-900/5 p-6  shadow-sm dark:bg-neutral-100/5">
      <h1 className="text-lg font-semibold tracking-wide">{blog.title}</h1>
      <div className="flex flex-row">
        <span className="text-neutral-900/50 dark:text-neutral-100/50">
          {formattedDate(blog.date)}
        </span>
      </div>
      <span className="text-md whitespace-pre-wrap font-medium">
        {blog.description}
      </span>
    </div>
  )
}

export default BlogCard
