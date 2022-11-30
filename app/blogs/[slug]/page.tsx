import { allBlogs, Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import { notFound } from "next/navigation"
import PostMetrics from "@components/PostMetrics"
import Article from "@components/Article"


export async function generateStaticParams () {
   return allBlogs.map((blog) => ({
    slug:blog.slug
   }))
}

export default async function BlogPage ({params}:{params:any}) {

    const blog = await allBlogs.find((blog:Blog) => blog.slug === params.slug)
    if(!blog){
        notFound()
    }
    return (
        <div className="flex flex-col mx-auto max-w-2xl px-5 space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-6xl tracking-tight font-bold">{blog?.title}</h1>
        <div className="mx-auto flex w-full max-w-2xl flex-row justify-start space-x-4">
        <p>{formattedDate(blog.date)}</p>
        <div className="text-neutral-900/50 dark:text-neutral-100/50">
            &middot;
        </div>
        <PostMetrics slug={blog.slug}/>
        </div>
        <div className="pb-6 md:pb-10">
        <Article code={blog.body.code} />
        </div>
        </div>
    )
}