import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

const font = fetch(
  new URL("../../assets/WorkSans-Regular.otf", import.meta.url),
).then((res) => res.arrayBuffer())

export default async function handler(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const fontData = await font
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Software Developer & Writer"
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 100,
            fontFamily: '"Work Sans"',
            backgroundImage:
              "linear-gradient(225deg, rgba(55,59,68,1) 30%, rgba(52,65,233,1) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "40px 10px 40px 10px",
            
          }}
        >
          <div
            style={{
              left: 42,
              bottom: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
            alt="GitHub Avatar"
            width="30"
            height="30"
            src={`https://github.com/AJ-Kulundu.png`}
            style={{
              borderRadius: 128,
              margin: "16px 0px",
            }}
          />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                color:"white",
              }}
            >
              ajkulundu.com
            </span>
          </div>
          <div
            style={{
              lineHeight: 1,
              fontSize: 48,
              display: "flex",
              margin: "16px 0px",
            }}
          >
            <span style={{color:"white",}}>AJ Kulundu</span>
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
            <span style={{color:"white",}}>{title}</span>
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
