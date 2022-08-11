import type { NextPage } from "next"
import Container from "@components/Container"

const Home: NextPage = () => {
  return (
    <Container>
      <div className="mx-auto flex w-full justify-center">
        <h1 className="text-xl font-semibold">Hello world!</h1>
      </div>
    </Container>
  )
}

export default Home
