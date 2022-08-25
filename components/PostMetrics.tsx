import React, { useEffect } from "react"
import { useBlogViews } from "@libs/useBlogViews"
import { Loading } from "./Loading"

const PostMetrics = ({ slug }: { slug: string }) => {
  const { views, isError, isLoading, increment } = useBlogViews(slug, {
    revalidateOnMount: false,
  })

  useEffect(() => increment(), [])

  return (
    <>
      {isError || isLoading ? (
        <Loading />
      ) : (
        <span className="text-neutral-900/50 dark:text-neutral-100/50">
          {views} views
        </span>
      )}
    </>
  )
}

export default PostMetrics
