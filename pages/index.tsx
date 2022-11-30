import Container from "@components/Container"
import TextTransition, { presets } from "react-text-transition"
import React from "react"
import { Work_Sans } from "@next/font/google"

const worksans = Work_Sans({
  variable: "--font-worksans",
})

const TEXTS = ["Software Developer", "Technical Writer", "Cloud Practitioner"]

const Home = () => {
  const IMAGE = `https://ajkulundu.com/api/og`
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index: number) => index + 1),
      3000, // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <Container imageURL={IMAGE}>
      <div
        className={`mx-auto mb-20 flex w-full max-w-2xl flex-col justify-start space-y-6 py-20 md:mb-8 ${worksans.variable} font-sans`}
      >
        <p className={`flex justify-start text-xl `}>Hello, my name is</p>
        <p className={`flex justify-start text-4xl font-bold tracking-wide`}>
          AJ Kulundu
        </p>
        <div className="flex flex-row">
          <p className={`text-2xl `}>I&apos;m a&nbsp;</p>
          <p className={`text-2xl font-bold text-black dark:text-white `}>
            <TextTransition springConfig={presets.gentle} inline>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Home

{
  /* <Typical
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
            /> */
}
