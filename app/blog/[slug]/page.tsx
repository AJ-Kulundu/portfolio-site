import { allBlogs, Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import { notFound } from "next/navigation"
import PostMetrics from "@components/PostMetrics"
import Article from "@components/Article"
import LikeButton from "@components/LikeButton"
import {Metadata} from 'next';

interface PageProps {
  params:{
    slug:string
  }
}

async function getPageFromParams(params:PageProps["params"]){
  const slug = params?.slug
  const blog = await allBlogs.find((blog: Blog) => blog.slug === slug)

  if (!blog){
    null
  }

  return blog
}

async function generateMetadata({params}:PageProps): Promise<Metadata> {
  const blog = await getPageFromParams(params)
  if (!blog){
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images:`https://ajkulundu.com/api/og?title=${blog.title}`,
      url: "https://ajkulundu.com",
      siteName: "AJ Kulundu",
      type: "website",
      description: "AJ Kulundu - Developer & Writer",
    },
    robots:{
      follow: true,
      index: true,
    },
    icons: {
      icon: "/logo.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@AJKulundu",
      title: "AJ Kulundu - Developer & Writer",
      description: "Fullstack web developer and writer",
      creator: "@AJKulundu",
      images:{ url: `https://ajkulundu.com/api/og?title=${blog.title}`, alt: `AJ Kulundu - ${blog.title}` },
    }
  }
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogPage({ params }: PageProps) {
  const blog = await getPageFromParams(params)
  if (!blog) {
    notFound()
  }
  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-4 p-5 md:space-y-6">
      <h1
        className={` text-4xl font-bold tracking-tight md:text-6xl`}
      >
        {blog?.title}
      </h1>
      <div className="mx-auto flex w-full max-w-2xl flex-row justify-start space-x-4">
        <p>{formattedDate(blog.date)}</p>
        <div className="text-neutral-900/50 dark:text-neutral-100/50">
          &middot;
        </div>
        <PostMetrics slug={blog.slug} />
      </div>
      <div className="pb-6 md:pb-10">
        <Article code={blog.body.code} />
      </div>
      <div className="flex items-center justify-center p-4">
        <LikeButton slug={blog.slug} />
      </div>
    </div>
  )
}
