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
    <div className="space-x-4">
      {viewsError || viewsLoading ? (
        <Loading />
      ) : (
        <span className="text-neutral-900/50 dark:text-neutral-100/50">
          {views} views
        </span>
      )}
      {likesLoading || likesError ? (
        <Loading />
      ) : (
        <span className="text-neutral-900/50 dark:text-neutral-100/50">
          {likes} likes
        </span>
      )}
    </div>
  )
}

export default PostMetrics
