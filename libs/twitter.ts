import {
  User,
  Media,
  Tweet,
  Includes,
  LinkedTweetType,
  FormattedTweet,
  ApiResponse,
} from "@models/twitter"
import { encode } from "qss"
import { formattedDate } from "./formattedDate"

const getAuthor = (users: User[], author_id: string | undefined) => {
  return users.find((user) => user.id === author_id)!
}

const getMedia = (media: Media[], media_keys: string[] | undefined) => {
  if (!media || !media_keys) {
    return undefined
  }

  let medias: Media[] = []
  media_keys.forEach((key) => {
    const _media = media.find((media) => media.media_key === key)

    if (_media) {
      medias.push(_media)
    }
  })

  return medias
}

const getReferencedTweets = (includes: Includes, tweet: Tweet) => {
  if (!tweet.referenced_tweets) {
    return undefined
  }

  let referencedTweets = []

  for (const referencedTweet of tweet.referenced_tweets) {
    const tweet = includes.tweets.find(
      (tweet) => tweet.id === referencedTweet.id,
    )!

    if (tweet) {
      referencedTweets.push({
        ...tweet,
        type: referencedTweet.type,
      })
    }
  }

  return referencedTweets
}

const replaceBetween = (
  origin: string,
  startIndex: number,
  endIndex: number,
  insertion: string,
) => origin.substring(0, startIndex) + insertion + origin.substring(endIndex)

const getStartEnd = (str: string, sub: string) => [
  str.indexOf(sub),
  str.indexOf(sub) + sub.length,
]

const formatTweet = (
  includes: Includes,
  tweet: Tweet & { type?: LinkedTweetType },
) => {
  let textFormatted = tweet.text

  if (tweet.entities?.urls) {
    for (const url of tweet.entities?.urls) {
      let replacement = url.display_url
      if (
        (url.status && tweet.text.endsWith(url.url)) ||
        (tweet.text.endsWith(url.url) &&
          url.display_url.startsWith("pic.twitter.com/")) ||
        tweet.referenced_tweets?.find(
          (x) => x.type === "quoted" && url.expanded_url.endsWith(x.id),
        )
      ) {
        replacement = ""
      }

      const [start, end] = getStartEnd(textFormatted, url.url)

      textFormatted = replaceBetween(textFormatted, start, end, replacement)
    }
  }

  const author = getAuthor(includes.users, tweet.author_id)
  const media = getMedia(includes.media, tweet.attachments?.media_keys)

  const createdAtFormatted = formattedDate(tweet.created_at)

  const formattedTweet: FormattedTweet = {
    id: tweet.id,
    author: {
      name: author.name,
      imageUrl: author.profile_image_url,
      authorUrl: `https://twitter.com/${author.username}`,
      username: author.username,
      verified: author.verified,
    },
    text: textFormatted.trim(),
    createdAt: createdAtFormatted,
    // metrics: metricsFormatted,
    likeUrl: `https://twitter.com/intent/like?tweet_id=${tweet.id}`,
    retweetUrl: `https://twitter.com/intent/retweet?tweet_id=${tweet.id}`,
    replyUrl: `https://twitter.com/intent/tweet?in_reply_to=${tweet.id}`,
    tweetUrl: `https://twitter.com/${author.username}/status/${tweet.id}`,
    ...(media ? { media } : {}),
    ...(tweet.type ? { type: tweet.type } : {}),
  }

  return formattedTweet
}

export const queryTweets = async (ids: string[]) => {
  if (ids.length === 0) return []

  const queryParams = encode({
    ids: ids.join(","),
    expansions: [
      "author_id",
      "attachments.media_keys",
      "referenced_tweets.id",
      "referenced_tweets.id.author_id",
    ].join(","),
    "tweet.fields": [
      "id",
      "author_id",
      "created_at",
      "text",
      "attachments",
      "in_reply_to_user_id",
      "public_metrics",
      "referenced_tweets",
      "entities",
    ].join(","),
    "user.fields": [
      "id",
      "name",
      "profile_image_url",
      "protected",
      "username",
      "verified",
    ].join(","),
    "media.fields": [
      "media_key",
      "type",
      "height",
      "width",
      "url",
      "preview_image_url",
      "alt_text",
    ].join(","),
  })

  const api: ApiResponse = await fetch(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    },
  ).then((x) => x.json())

  let tweets: FormattedTweet[] = []

  for (const tweet of api.data) {
    const formattedTweet = formatTweet(api.includes, tweet)
    const referencedTweets = getReferencedTweets(api.includes, tweet)
    const quoteTweet = referencedTweets?.find((t) => t.type === "quoted")
    const linkPreview = tweet.entities?.urls.find(
      (x: any) => x.status === 200 && tweet.text.endsWith(x.url),
    )

    tweets.push({
      ...formattedTweet,
      ...(linkPreview ? { linkPreview } : {}),
      ...(quoteTweet
        ? { quoteTweet: formatTweet(api.includes, quoteTweet) }
        : {}),
    })
  }

  return tweets
}
