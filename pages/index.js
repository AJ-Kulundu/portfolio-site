import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landing/Home'
import Contact from '../components/Contact'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
   <Landing />
   <Skills />
   <Contact />
   </div>
  )
}
