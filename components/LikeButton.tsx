"use client"
import React from "react"
import { HeartIcon } from "@heroicons/react/solid"
import { useBlogLikes } from "@libs/useBlogLikes"
import { Loading } from "./Loading"
import cx from "clsx"

const LikeButton = ({ slug }: { slug: string }) => {
  const {
    likes,
    userLikes,
    isError: likesError,
    isLoading: likesLoading,
    increment: likesIncrement,
  } = useBlogLikes(slug, { revalidateOnMount: false })

  return (
    <div className="flex items-center space-x-2">
      <button
        className="tansition-all relative transform overflow-hidden rounded-lg duration-500"
        onClick={() => likesIncrement()}
      >
        <div className="relative overflow-hidden rounded-lg">
          <div
            className={cx(
              "absolute inset-0 h-6 w-6 bg-gradient-to-r from-red-500 to-red-700 p-2 transition-transform dark:from-red-700 dark:to-red-900",
              {
                "translate-y-6": !userLikes || userLikes === 0,
                "translate-y-3": userLikes === 1,
              },
            )}
          />
          <HeartIcon
            className={`relative h-6 w-6 text-neutral-900/50 dark:text-neutral-100/50 ${
              likesLoading ? `animate-pulse` : null
            }`}
          />
        </div>
      </button>
      <span className="flex flex-row text-neutral-900/70 dark:text-neutral-100/70">
        {likesLoading || likesError ? <Loading /> : likes}
      </span>
    </div>
  )
}

export default LikeButton
