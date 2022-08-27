import React from "react"

export const Loading = () => {
  return (
    <div className="space-x-1">
      <span className="inline-flex animate-[loading_1.5s_ease-in-out_infinite] rounded-full">
        &bull;
      </span>
      <span className="inline-flex animate-[loading_1.5s_ease-in-out_0.4s_infinite] rounded-full">
        &bull;
      </span>
      <span className="inline-flex animate-[loading_1.5s_ease-in-out_0.8s_infinite] rounded-full">
        &bull;
      </span>
    </div>
  )
}
