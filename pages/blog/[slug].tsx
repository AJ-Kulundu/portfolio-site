import { allBlogs, Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import { useMDXComponent } from "next-contentlayer/hooks"
import Container from "@components/Container"
import PostMetrics from "@components/PostMetrics"
import LikeButton from "@components/LikeButton"
import { motion, useScroll } from 'framer-motion';

export const getStaticPaths = async () => {
  const paths: string[] = allBlogs.map((blog) => blog.url)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const blog = await allBlogs.find((blog) => blog.slug === params.slug)
  return {
    props: { blog },
  }
}

function BlogLayout({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <Container>
      <div className="mx-auto max-w-2xl space-y-4 py-10 ">
        <h1 className="text-6xl font-bold">{blog.title}</h1>
        <div className="mb-4 flex flex-row space-x-4">
          <span className="text-neutral-900/50 dark:text-neutral-100/50">
            {formattedDate(blog.date)}
          </span>
          <div className="text-neutral-900/50 dark:text-neutral-100/50">
            &middot;
          </div>
          <PostMetrics slug={blog.slug} />
        </div>
        <article className="prose marker:text-black prose-h2:text-4xl prose-h3:text-2xl hover:prose-a:text-teal-500 dark:hover:prose-a:text-teal-600 prose-h3:tracking-wide prose-h2:tracking-wide prose-p:text-lg prose-p:font-medium prose-p:text-black prose-a:no-underline prose-li:font-medium prose-li:text-black prose-hr:border-2 prose-hr:opacity-60 dark:prose-invert dark:marker:text-white dark:prose-p:text-white dark:prose-li:text-white">
          {blog && MDXContent ? <MDXContent /> : <h1>No blog posts</h1>}
        </article>
        <div className="flex items-center justify-center p-4">
          <LikeButton slug={blog.slug} />
        </div>
      </div>
    </Container>
  )
}

export default BlogLayout
