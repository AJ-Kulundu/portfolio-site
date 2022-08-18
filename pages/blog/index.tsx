import Container from "@components/Container"
import { compareDesc } from "date-fns"
import { allBlogs, Blog } from "contentlayer/generated"
import BlogCard from "@components/BlogCard"

export const getStaticProps = async () => {
  const blogs: Blog[] = allBlogs.sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return {
    props: { blogs },
  }
}

const Blogs = ({ blogs }: {blogs: Blog[]}) => {
  return (
    <Container>
      <div className="mx-auto max-w-2xl space-y-5 py-6">
        <h1 className="text-3xl font-semibold tracking-wide">Blogs Page</h1>
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </Container>
  )
}

export default Blogs
