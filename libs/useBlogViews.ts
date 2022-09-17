import useSWR, { SWRConfiguration } from "swr"

const API_URL = `/api/views`

async function getBlogViews(slug: string): Promise<number> {
  const res = await fetch(API_URL + `/${slug}`)

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data")
  }

  return res.json()
}

async function updateBlogViews(slug: string): Promise<number> {
  const res = await fetch(API_URL + `/${slug}`, { method: "POST" })

  if (!res.ok) {
    throw new Error("An error occurred while updating the data")
  }

  return res.json()
}

export const useBlogViews = (slug: string, config?: SWRConfiguration) => {
  const {
    data: views,
    error,
    mutate,
  } = useSWR<number>([API_URL, slug], () => getBlogViews(slug), {
    dedupingInterval: 600000,
    ...config,
  })

  const increment = () => {
    mutate(
      updateBlogViews(slug).catch((e) => {
        console.log(e)
        return 0
      }),
    )
  }

  return {
    views,
    isLoading: !error && !views,
    isError: !!error,
    increment,
  }
}
