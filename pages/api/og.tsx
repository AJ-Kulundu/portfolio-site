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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "40px 10px 40px 10px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              right: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
              }}
            >
              ajkulundu.com
            </span>
          </div>
          <img
            alt="GitHub Avatar"
            width="150"
            height="150"
            src={`https://github.com/AJ-Kulundu.png`}
            style={{
              borderRadius: 128,
              margin: "16px 0px",
            }}
          />
          <div
            style={{
              lineHeight: 1,
              fontSize: 48,
              display: "flex",
              margin: "16px 0px",
            }}
          >
            <b>AJ Kulundu</b>
          </div>
          <div
            style={{
              lineHeight: 1,
              fontSize: 48,
              display: "flex",
              margin: "16px 0px",
              textAlign: "center",
            }}
          >
            <b>{title}</b>
          </div>
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
