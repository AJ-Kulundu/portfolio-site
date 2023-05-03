"use client"
import React from "react"
import { Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import { useBlogViews } from "@libs/useBlogViews"
import { useBlogLikes } from "@libs/useBlogLikes"
import { Loading } from "./Loading"
import Link from "next/link"

export default function BCard({ blog }: { blog: Blog }) {
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
    <div className="flex flex-col justify-start space-y-2 rounded-xl p-5 shadow-md bg-neutral-900/5 dark:bg-neutral-100/5">
      <h2 className="text-2xl font-semibold hover:underline">
        <Link href={blog.url}>{blog.title}</Link>
      </h2>
      <div className="flex flex-row items-center space-x-4 text-sm tracking-wide">
        <span className="font-light ">{formattedDate(blog.date)}</span>
        <div className="font-light">&middot;</div>
        <span className="flex flex-row font-light">
          {viewsError || viewsLoading ? <Loading /> : views} views
        </span>
        <div className="font-light">&middot;</div>
        <span className="flex flex-row font-light">
          {likesLoading || likesError ? <Loading /> : likes} likes
        </span>
      </div>
      <p className="text-lg tracking-wide">{blog.description}</p>
      <p className="text-sm font-light tracking-wide">
        {blog.readingTime.text}
      </p>
    </div>
  )
}
