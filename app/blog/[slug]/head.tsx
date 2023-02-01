import { allBlogs, Blog } from "contentlayer/generated"

export default async function Head({ params }: { params: any }) {
  const blog: Blog = allBlogs.find((blog) => blog.slug === params.slug) || {
    title: "Blog Not Found",
    description: "You entered the wrong URL.",
    date: new Date().toISOString(),
    ...params,
  }

  const ogImage = `https://ajkulundu.com/api/og?title=${blog.title}`

  return (
    <>
      <title>{blog.title} - AJ Kulundu </title>
      <meta name="description" content={blog.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://ajkulundu.com/blog/${blog.slug}`}
      />
      <meta property="og:title" content={blog.title} />
      <meta property="og:description" content={blog.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:url" content={ogImage}></meta>
      <meta name="twitter:description" content={blog.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="article:published_time" content={blog.date} />
      <link rel="icon" href="/logo.png" />
    </>
  )
}
