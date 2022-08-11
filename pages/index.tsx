import type { NextPage } from "next"
import Container from "@components/Container"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex w-full justify-center mx-auto">
        <h1 className="text-xl font-semibold">Hello world!</h1>
      </div>
    </Container>
  )
}

export default Home
