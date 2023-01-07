import Head from 'next/head'
import { Inter } from '@next/font/google';
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)]
      text-white
      h-screen
      snap-y
      snap-mandatory
      overflow-scroll
       z-0"
    >
      <Head>
        <title>Chhuong's Portfolio</title>
      </Head>
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
