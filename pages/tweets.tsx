import type { NextPage } from "next"
import Container from "@components/Container"

const Tweets: NextPage = () => {
  return (
    <Container>
      <div className="flex w-full justify-center mx-auto">
        <h1 className="text-xl font-semibold">Inspirational Tweets</h1>
      </div>
    </Container>
  )
}

export default Tweets
