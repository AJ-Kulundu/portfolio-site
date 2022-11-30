import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Container from "@components/Container"
import { queryTweets } from "@libs/twitter"
import { Tweet } from "@components/Tweet"
import { Work_Sans, Manrope } from "@next/font/google"

const worksans = Work_Sans({
  variable: "--font-worksans",
})

const manrope = Manrope({
  variable: "--font-manrope",
})

export const getStaticProps: GetStaticProps = async () => {
  const tweetIds = [
    "1520782141075902464",
    "1522560136346099712",
    "1002105652792066048",
    "1471558914579722245",
    "1002109380706250752",
    "1346476915838709763",
    "1297189305023107072",
  ]

  const tweets = await queryTweets(tweetIds)
  return {
    props: {
      tweets,
    },
  }
}

const Tweets: NextPage = ({
  tweets,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const IMAGE = `https://ajkulundu.com/api/og?title=My Favourite Tweets`
  return (
    <Container title="Tweets - AJ Kulundu" imageURL={IMAGE}>
      <div className="mx-auto max-w-2xl space-y-5 py-6">
        <h1
          className={` ${manrope.variable} font-manrope text-3xl font-semibold`}
        >
          Tweets
        </h1>
        <p className={`${worksans.variable} font-sans font-medium`}>
          I use twitter sometimes and find tweets that make me think, give me
          inspiration or explain my ideas better. I created this page to share
          some of my favourite tweets.
        </p>
        <div className={`${worksans.variable} mt-4 space-y-10 font-sans`}>
          {tweets.map((tweet: any) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Tweets
