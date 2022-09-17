// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet
export type Tweet = {
  id: string
  text: string
  author_id: string
  created_at: string
  author: User
  attachments?: {
    media_keys: string[]
  }
  conversation_id: string
  public_metrics?: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
  referenced_tweets?: {
    type: LinkedTweetType
    id: string
  }[]
  entities: {
    urls: URL[]
    mentions?: {
      start: number
      end: number
      username: string
      id: string
    }[]
  }
  media: Media[]
}

export type LinkedTweetType = "retweeted" | "quoted" | "replied_to"

export type URL = {
  start: number
  end: number
  url: string
  expanded_url: string
  display_url: string
  images?: {
    url: string
    width: number
    height: number
  }[]
  status?: number
  title?: string
  description?: string
  unwound_url?: string
}
// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
export type Media = {
  media_key: string
  height: number
  width: number
  url: string
  preview_image_url: string
  type: "animated_gif" | "photo" | "video"
  alt_text?: string
}

// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
export type User = {
  id: string
  name: string
  profile_image_url: string
  username: string
  protected: boolean
  verified: boolean
}

export type Includes = {
  users: User[]
  media: Media[]
  tweets: Tweet[]
}

export type ApiResponse = {
  data: Tweet[]
  includes: Includes
  errors?: any[]
}

export type FormattedTweet = {
  id: string
  text: string
  createdAt: string
  likeUrl: string
  retweetUrl: string
  replyUrl: string
  tweetUrl: string
  author: {
    name: string
    authorUrl: string
    imageUrl: string
    username: string
    verified: boolean
  }
  quoteTweet?: FormattedTweet
  linkPreview?: URL
  type?: LinkedTweetType
  media?: Media[]
}
