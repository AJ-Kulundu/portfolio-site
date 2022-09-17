import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@libs/prisma"
import { z } from "zod"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // declare the slug
    const slug = z.string().parse(req.query.slug)

    switch (req.method) {
      case "GET": {
        const blog = await prisma.blog.findUnique({
          where: { slug },
        })

        res.json(blog?.views || 1)
        break
      }

      case "POST": {
        const blog = await prisma.blog.upsert({
          where: { slug },
          update: { views: { increment: 1 } },
          create: { slug, views: 1 },
        })

        res.json(blog?.views || 1)
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
