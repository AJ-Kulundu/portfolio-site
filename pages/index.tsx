import type { NextPage } from "next"
import Container from "@components/Container"
import Typical from "react-typical"

export const getStaticProps = () => {
  const name = "AJ Kulundu"

  return{
    props:{
      name
    }
  }
}

const Home: NextPage<{name:string}> = ({name}) => {
   
   
  return (
    <Container>
      <div className="mx-auto mb-20 flex w-full max-w-2xl flex-col justify-start space-y-6 py-20 md:mb-8">
        <span className="flex justify-start text-xl">Hello, my name is</span>
        <span className="flex justify-start text-4xl font-bold tracking-wide">
          {name}
        </span>
        <span className="flex justify-start text-2xl ">
          I&apos;m a&nbsp;
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text font-bold text-transparent">
            <Typical
              steps={[
                "Software Developer",
                3000,
                "Cloud Practitioner",
                2000,
                "Technical Writer",
                2500,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </span>
        </span>
      </div>
    </Container>
  )
}

export default Home
