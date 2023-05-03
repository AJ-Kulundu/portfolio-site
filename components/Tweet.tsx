import type { FormattedTweet } from "@models/twitter"
import LazyImage from "./LazyImage"
import { BadgeCheckIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { motion } from "framer-motion"

export const Tweet = ({
  text,
  author,
  media,
  createdAt,
  // metrics,
  quoteTweet,
  linkPreview,
  type,
  likeUrl,
  replyUrl,
  retweetUrl,
  tweetUrl,
  showAttachments = true,
}: FormattedTweet & {
  showAttachments?: boolean
}) => {
  return (
    <div className="mx-auto rounded-2xl bg-neutral-900/5  p-6 shadow-md dark:bg-neutral-100/5">
      <div className="mb-2 flex flex-col items-start text-lg">
        <div className="flex min-w-0 items-center">
          <Image
            alt={author.name}
            src={author.imageUrl}
            height={45}
            width={45}
            className="rounded-full"
          />
          <div className="ml-2 flex flex-col md:ml-4 md:flex-row">
            <span className="mr-1 flex flex-row items-center truncate font-semibold">
              {author.name}
              {author.verified ? (
                <BadgeCheckIcon className="h-5 w-5 text-blue-400" />
              ) : null}
            </span>
            <span className="text-neutral-900/50 dark:text-neutral-100/50">
              @{author.username}
            </span>
          </div>
        </div>
      </div>
      <span className="whitespace-pre-wrap text-lg font-medium">{text}</span>
      {media && media.length ? (
        <div className="mt-4">
          {media.map((media) => (
            <div key={media.media_key}>
              <LazyImage
                src={media.preview_image_url || media.url}
                alt={media.url}
                height={media.height}
                width={media.width}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      ) : null}
      {showAttachments && linkPreview ? (
        <div className="mt-4 rounded-xl shadow-md">
          <div className="text-sm">{linkPreview.display_url.split("/")[0]}</div>
          <div className="text-base">{linkPreview.title}</div>
          <div className="text-base">{linkPreview.description}</div>
        </div>
      ) : null}
      {showAttachments && quoteTweet ? (
        <div className="mt-4">
          <Tweet {...quoteTweet} />
        </div>
      ) : null}
      <div className="mt-4">
        {type !== "quoted" ? <span>{createdAt}</span> : null}
      </div>
    </div>
  )
}
