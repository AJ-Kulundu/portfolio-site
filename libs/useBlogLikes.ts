import useSWR, { SWRConfiguration } from "swr"
import { useState } from "react"
import { useDebounce } from "react-use"

const API_URL = `/api/likes`

type MetricsType = {
  likes: number
  userLikes: number
}

async function getBlogLikes(slug: string): Promise<MetricsType> {
  const res = await fetch(API_URL + `/${slug}`)

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.")
  }
  return res.json()
}

async function updateBlogLikes(
  slug: string,
  count: number,
): Promise<MetricsType> {
  const res = await fetch(API_URL + `/${slug}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count }),
  })

  if (!res.ok) {
    throw new Error("An error occurred while updating the data")
  }

  return res.json()
}

export const useBlogLikes = (slug: string, config?: SWRConfiguration) => {
  const { data, error, mutate } = useSWR(
    [API_URL, slug],
    () => getBlogLikes(slug),
    { dedupingInterval: 600000, ...config },
  )

  const [batchedLikes, setBatchedLikes] = useState(0)

  const increment = () => {
    if (!data || data.userLikes >= 2) {
      return
    }
    //Optimistic Updates
    mutate(
      {
        likes: data.likes + 1,
        userLikes: data.userLikes + 1,
      },
      false,
    )
    // the batched likes will be the count parameter
    setBatchedLikes(batchedLikes + 1)
  }

  useDebounce(
    () => {
      if (batchedLikes === 0) return

      mutate(updateBlogLikes(slug, batchedLikes))
      setBatchedLikes(0)
    },
    1000,
    [batchedLikes],
  )

  return {
    userLikes: data?.userLikes,
    likes: data?.likes,
    isLoading: !data && !error,
    isError: !!error,
    increment,
  }
}
