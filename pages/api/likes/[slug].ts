import type { NextApiResponse, NextApiRequest } from "next"
import { prisma } from "@libs/prisma"
import { z } from "zod"
import { createHash } from "crypto"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Declare slug
    const slug = z.string().parse(req.query.slug)
    // Declare the IP Address
    // We use the "x-forwarded-for" header in vercel to get the IP Address
    // "0.0.0.0" is the fallback for development
    const address = req.headers["x-forwarded-for"] || "0.0.0.0"
    // Declare the userID
    // Their IP Address is used to identify them
    // The IP Address is hashed with salt for privacy protection
    const userID = createHash("md5")
      .update(address + process.env.IP_ADDRESS_SALT!, "utf8")
      .digest("hex")
    //Combine the slug and Hashed IP Address to identify a user's interaction with a post
    const sessionID = slug + "_" + userID

    switch (req.method) {
      case "GET": {
        const [blog, user] = await Promise.all([
          prisma.blog.findUnique({
            where: { slug },
          }),
          prisma.session.findUnique({
            where: { id: sessionID },
          }),
        ])
        res.json({
          likes: blog?.likes || 0,
          userLikes: user?.likes || 0,
        })
        break
      }

      case "POST": {
        //Declare count and give it a max of 2
        const count = z.number().min(1).max(2).parse(req.body.count)
        const [blog, user] = await Promise.all([
          prisma.blog.upsert({
            where: { slug },
            create: { slug, likes: count },
            update: { likes: { increment: count } },
          }),
          prisma.session.upsert({
            where: { id: sessionID },
            create: { id: sessionID, likes: count },
            update: { likes: { increment: count } },
          }),
        ])

        res.json({
          likes: blog?.likes || 0,
          userLikes: user?.likes || 0,
        })
        break
      }

      default: {
        res.setHeader("Allow", ["GET", "POST"])
        res.status(405).send("Method Not Allowed")
      }
    }
  } catch (err: any) {
    console.error(err.message)

    res.status(500).json({
      statusCode: 500,
      message: err.message,
    })
  }
}
