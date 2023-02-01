import "server-only"
import React from "react"
import { queryTweets } from "@libs/twitter"
import { Tweet } from "@components/Tweet"

export default async function TweetPage() {
  const tweetIds = [
    "1367143086137110530",
    "1254177712945500160",
    "1471558914579722245",
    "1551996595956133888",
    "1594923336043069441",
    "1002109380706250752",
    "1346476915838709763",
    "1297189305023107072",
  ]
  const tweets = await queryTweets(tweetIds)
  return (
    <div className="mx-auto max-w-2xl space-y-5 py-6 px-5">
      <h1 className={`text-3xl font-semibold`}>Tweets</h1>
      <p className={`text-lg font-medium`}>
      I use Twitter to find insight and enlightenment. I&apos;m sharing my favourite tweets here to encourage reflection and discovery.
      </p>
      <div className={` mt-4 space-y-10 `}>
        {tweets.map((tweet: any) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  )
}
