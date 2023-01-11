/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaushik's Portfolio</title>
      </Head>
      <h1>Lest's build an Awesome Portfolio</h1>
    </div>
  )
}
