import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Services from 'components/Services'
import Roadmap from 'components/Roadmap'
import Team from 'components/Team'
import Footer from 'components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div class="page-wrapper">
        <Header />
        <Landing />
        <Services />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </>
  )
}
