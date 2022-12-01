"use client"
import cx from "clsx"
import type { ImageProps } from "next/image"
import NextImage from "next/image"
import React from "react"

const LazyImage = (props: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div
      className={cx(
        "relative flex overflow-hidden rounded-xl bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl ",
        isLoading ? "animate-pulse" : "",
      )}
    >
      <NextImage
        {...props}
        className={cx(
          "duration-600 rounded-xl ease-in-out",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0",
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

export default LazyImage
