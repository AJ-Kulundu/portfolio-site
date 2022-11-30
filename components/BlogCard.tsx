"use client"
import React from "react"
import { Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import Link from "next/link"
import { useBlogViews } from "@libs/useBlogViews"
import { useBlogLikes } from "@libs/useBlogLikes"
import { Loading } from "./Loading"
import { motion } from "framer-motion"

const BlogCard = ({ blog }: { blog: Blog }) => {
  const {
    views,
    isLoading: viewsLoading,
    isError: viewsError,
  } = useBlogViews(blog.slug, { revalidateOnMount: false })
  const {
    likes,
    isError: likesError,
    isLoading: likesLoading,
  } = useBlogLikes(blog.slug, { revalidateOnMount: false })
  return (
    <Link href={blog.url} passHref>
      <motion.a
        className="mx-auto flex w-full flex-col items-start space-y-2 rounded-2xl bg-neutral-900/5 p-6 shadow-sm  dark:bg-neutral-100/5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h1 className="text-xl font-semibold tracking-wide">{blog.title}</h1>
        <div className="flex flex-row items-center space-x-4">
          <span className="text-neutral-900/50 dark:text-neutral-100/50 ">
            {formattedDate(blog.date)}
          </span>
          <div className="text-neutral-900/50 dark:text-neutral-100/50">
            &middot;
          </div>
          <span className="flex flex-row text-neutral-900/50 dark:text-neutral-100/50">
            {viewsError || viewsLoading ? <Loading /> : views} views
          </span>
          <div className="text-neutral-900/50 dark:text-neutral-100/50">
            &middot;
          </div>
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
      </motion.a>
    </Link>
  )
}

export default BlogCard
