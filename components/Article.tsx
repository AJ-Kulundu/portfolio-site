"use client"
import { useMDXComponent } from "next-contentlayer/hooks"

export default function Article({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)
  return (
    <article className="prose max-w-2xl marker:text-black prose-h2:text-4xl prose-h2:tracking-tight prose-h3:text-2xl prose-h3:font-bold prose-h3:tracking-tight prose-p:text-lg prose-p:font-medium prose-p:tracking-wide prose-p:text-black prose-a:text-teal-500 prose-pre:max-w-2xl prose-li:font-medium prose-li:text-black prose-hr:border-2 prose-hr:opacity-60 dark:prose-invert dark:marker:text-white dark:prose-p:text-white dark:prose-a:text-teal-600 dark:prose-li:text-white md:mx-auto">
      <MDXContent />
    </article>
  )
}
