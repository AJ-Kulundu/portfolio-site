import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import Container from "@components/Container"
import { queryTweets } from "@libs/twitter"
import { Tweet } from "@components/Tweet"

export const getStaticProps: GetStaticProps = async () => {
  const tweetIds = ["1548801581016969217",
  "1544216078875648000",
  "1479115290579374090",
  "1519359624264417286",
  "1557135536686616580",
  "1541782558756818944",
  "1451606778676908039",]
  
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
  return (
    <Container>
      <div className="mx-auto max-w-2xl space-y-5 py-6">
        <h1 className="text-3xl font-semibold tracking-wide">Tweets</h1>
        <p className="font-medium">
          I use twitter sometimes and find tweets that make you think, give you
          inspiration or explain my ideas better. I created this page to share
          some of my favourite tweets.
        </p>
        <div className="mt-4 space-y-10">
          {tweets.map((tweet: any) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Tweets
