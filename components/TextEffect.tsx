"use client"
import TextTransition, { presets } from "react-text-transition";
import React from 'react';

export default function TextEffect({texts}:{texts:string[]}){
    const [index, setIndex] = React.useState(0)
    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index: number) => index + 1),
          3000, // every 3 seconds
        )
        return () => clearTimeout(intervalId)
      }, [])
    return(
        <p>
        <TextTransition springConfig={presets.gentle} inline>
          {texts[index % texts.length]}
        </TextTransition>
      </p>
    )
}