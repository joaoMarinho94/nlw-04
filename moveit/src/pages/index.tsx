import React from 'react'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head'

import { CountDownProvider } from '../contexts/CountDownContext'
import { Container } from '../styles/pages/Home'
import { ChallengeBox } from '../components/ChallengeBox'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </Container>
  )
}

export default Home
