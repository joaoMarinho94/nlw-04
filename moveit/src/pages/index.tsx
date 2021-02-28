import React, { ReactNode } from 'react'

import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ChallengesProvider } from '../contexts/ChallengesContext'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import { CountDownProvider } from '../contexts/CountDownContext'
import { Container } from '../styles/pages/Home'
import { ChallengeBox } from '../components/ChallengeBox'

interface HomeProps {
  children?: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Home: React.FC = ({
  challengesCompleted,
  currentExperience,
  level
}: HomeProps) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted } = req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
