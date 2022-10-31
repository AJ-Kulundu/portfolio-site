/* eslint-disable @next/next/no-server-import-in-page */
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "experimental-edge",
}

const font = fetch(
  new URL("../../assets/WorkSans-Regular.otf", import.meta.url),
).then((res) => res.arrayBuffer())
export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const fontData = await font
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Developer & Writer"
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 100,
            fontFamily: '"Work Sans"',
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
          tw=" flex flex-col items-center justify-center w-full h-full py-40 px-10 rounded-lg bg-white"
        >
          <img
            alt="GitHub Avatar"
            width="200"
            height="200"
            src={`https://github.com/AJ-Kulundu.png`}
            style={{
              borderRadius: 128,
            }}
          />
          <h1 tw="text-5xl capitalize font-bold ml-2 text-center">
            AJ Kulundu
          </h1>
          <h1 tw="text-5xl tracking-wide font-semibold ml-2 text-center">
            {title}
          </h1>
        </div>
      ),
      {
        width: 1000,
        height: 600,
        fonts: [
          {
            name: "Work Sans",
            data: fontData,
            style: "normal",
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
