import { allBlogs, Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import { useMDXComponent } from "next-contentlayer/hooks"
import Container from "@components/Container"
import PostMetrics from "@components/PostMetrics"
import LikeButton from "@components/LikeButton"

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
  const IMAGE = `https://ajkulundu.com/api/og?title=${blog.title}`
  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <Container
      title={`AJ Kulundu - ${blog.title}`}
      description={blog.description}
      imageURL={IMAGE}
    >
      <div className="flex flex-col justify-center space-y-4 py-10">
        <div className="mx-auto flex max-w-2xl flex-row">
          <h1 className="text-4xl font-bold md:text-6xl">{blog.title}</h1>
        </div>
        <div className="mx-auto mb-4 flex w-full max-w-2xl flex-row justify-start space-x-4">
          <span className="text-neutral-900/50 dark:text-neutral-100/50">
            {formattedDate(blog.date)}
          </span>
          <div className="text-neutral-900/50 dark:text-neutral-100/50">
            &middot;
          </div>
          <PostMetrics slug={blog.slug} />
        </div>
        <article className="prose max-w-2xl marker:text-black prose-h2:text-4xl prose-h2:tracking-wide prose-h3:text-2xl prose-h3:tracking-wide prose-p:text-lg prose-p:font-medium prose-p:text-black prose-a:no-underline hover:prose-a:text-teal-500 prose-pre:max-w-2xl prose-li:font-medium prose-li:text-black prose-hr:border-2 prose-hr:opacity-60 dark:prose-invert dark:marker:text-white dark:prose-p:text-white dark:hover:prose-a:text-teal-600 dark:prose-li:text-white md:mx-auto">
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
