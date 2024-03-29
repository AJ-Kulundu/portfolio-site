import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import readingTime from "reading-time"
import rehypeSlug from "rehype-slug"
import rehypeCodeTitles from "rehype-code-titles"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrism from "rehype-prism-plus"
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "The title of the blog post",
    },
    description: {
      type: "string",
      required: true,
      description: "The desription of the blog post",
    },
    date: {
      type: "string",
      required: true,
      description: "The date of the blog post",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (blog) => blog._raw.flattenedPath,
    },
    readingTime: {
      type: "json",
      resolve: (blog) => readingTime(blog.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: "blog",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis,
    ],
  },
})
