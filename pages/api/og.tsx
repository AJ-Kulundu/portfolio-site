import { ImageResponse } from "@vercel/og"
import {NextRequest} from "next/server"

export const config = {
  runtime: "experimental-edge",
}

export default function handler(req:NextRequest) {
  try{
    const {searchParams} = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle? searchParams.get('title')?.slice(0,100) : "Developer & Writer";
  return new ImageResponse(
    (
      <div
        tw=" flex justify-start items-end w-full h-full p-10 mb-4 "
      >
        <img 
        width="150"
          height="150"
          src={`https://github.com/AJ-Kulundu.png`}
          style={{
            borderRadius: 128,
          }}/>
        <h1 tw="text-5xl tracking-wide capitalize font-semibold ml-2">AJ Kulundu - {title}</h1>
      </div>
    ),
    {
      width: 1000,
      height: 600,
    },
  )
}catch(e: any){
  console.log(`${e.message}`);
  return new Response(`Failed to generate the image`, {
    status: 500,
  });
}
}
