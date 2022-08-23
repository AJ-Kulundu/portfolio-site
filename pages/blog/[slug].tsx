import { allBlogs, Blog } from "contentlayer/generated"
import { formattedDate } from "@libs/formattedDate"
import { useMDXComponent } from "next-contentlayer/hooks"
import Container from "@components/Container"

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
      <div className="mx-auto max-w-2xl space-y-4 py-8 ">
        <h1 className="text-6xl font-bold">{blog.title}</h1>
        <div className="mb-4 flex flex-row justify-between">
          <span className="text-neutral-900/50 dark:text-neutral-100/50">
            {formattedDate(blog.date)}
          </span>
        </div>
        <article className="prose prose-h2:text-4xl prose-h2:tracking-wide prose-p:text-lg prose-p:font-medium prose-li:font-medium prose-p:text-black dark:prose-invert dark:prose-p:text-white prose-li:text-black dark:prose-li:text-white marker:text-black dark:marker:text-white prose-hr:border-2 prose-hr:opacity-60 prose-a:no-underline">
          {blog && MDXContent ? (<MDXContent />): <h1>No blog posts</h1>}
        </article>
      </div>
    </Container>
  )
}

export default BlogLayout
