"use client"
import React, { useRef } from "react"

export default function PhotoRef({
  primaryImg,
  secondaryImg,
}: {
  primaryImg: string
  secondaryImg: string
}) {
  const imageRef = useRef<any>(null)

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg
      }}
      src={primaryImg}
      alt="A photo of Westlands,Nairobi by Antony Trivet."
      ref={imageRef}
    />
  )
}
