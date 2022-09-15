import React from "react"

export function Playground({
  children,
  description,
}: {
  children: React.ReactNode
  description?: string
}) {
  return (
    <div className="mb-6 md:-mx-10">
      <div className="md:py-18 flex items-center justify-center rounded-xl border dark:border-black/30 border-white/30 bg-black/20 dark:bg-white/20 px-4 py-10 md:px-8">
        {children}
      </div>
      {description ? (
        <div className="mt-3 text-sm text-neutral-900/50 dark:text-neutral-100/50">
          {description}
        </div>
      ) : null}
    </div>
  )
}
