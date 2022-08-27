import React from "react"
import { Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import Link from "next/link"
import { useBlogViews } from "@libs/useBlogViews"
import { useBlogLikes } from "@libs/useBlogLikes"
import { Loading } from "./Loading"

const BlogCard = ({ blog }: { blog: Blog }) => {
  const {
    views,
    isLoading: viewsLoading,
    isError: viewsError,
  } = useBlogViews(blog.slug)
  const {
    likes,
    isError: likesError,
    isLoading: likesLoading,
  } = useBlogLikes(blog.slug)
  return (
    <Link href={blog.url} passHref>
      <a className="mx-auto flex w-full flex-col items-start space-y-2 rounded-2xl bg-neutral-900/5 p-6 shadow-sm hover:bg-neutral-900/20 dark:bg-neutral-100/5 hover:dark:bg-neutral-100/20">
        <h1 className="text-xl font-semibold tracking-wide">{blog.title}</h1>
        <div className="flex flex-row items-center space-x-5">
          <span className="text-neutral-900/50 dark:text-neutral-100/50 ">
            {formattedDate(blog.date)}
          </span>
          <span className="flex flex-row text-neutral-900/50 dark:text-neutral-100/50">
            {viewsError || viewsLoading ? <Loading /> : views} views
          </span>
          <span className="flex flex-row text-neutral-900/50 dark:text-neutral-100/50">
            {likesLoading || likesError ? <Loading /> : likes} likes
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
