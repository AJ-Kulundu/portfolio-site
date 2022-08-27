import React, { useEffect } from "react"
import { useBlogViews } from "@libs/useBlogViews"
import { useBlogLikes } from "@libs/useBlogLikes"
import { Loading } from "./Loading"

const PostMetrics = ({ slug }: { slug: string }) => {
  const {
    views,
    isError: viewsError,
    isLoading: viewsLoading,
    increment: viewsIncrement,
  } = useBlogViews(slug, {
    revalidateOnMount: false,
  })
  const {
    likes,
    isError: likesError,
    isLoading: likesLoading,
  } = useBlogLikes(slug, { revalidateOnMount: false })

  useEffect(() => viewsIncrement(), [])

  return (
    <div className="flex flex-row items-center space-x-4">
      <span className="flex flex-row text-neutral-900/50 dark:text-neutral-100/50">
        {viewsError || viewsLoading ? <Loading /> : views} views
      </span>
      <span className="flex flex-row text-neutral-900/50 dark:text-neutral-100/50">
        {likesLoading || likesError ? <Loading /> : likes} likes
      </span>
    </div>
  )
}

export default PostMetrics
