import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { ExperienceBar } from '../components/ExperienceBar'
import { SideBar } from '../components/SideBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'

import { Container } from '../styles/pages/Home'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountDownProvider } from '../contexts/CountDownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface IUserGithub {
  name: string
  avatar_url: string
}

interface IProps {
  user: IUserGithub
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Home: React.FC<IProps> = ({
  challengesCompleted,
  currentExperience,
  level,
  user
}) => {
  const { push } = useRouter()
  const { avatar_url, name } = user

  useEffect(() => {
    if (!name) {
      toast.error('Usuário não encontrado.')
      push('/')
    }
  }, [])

  return (
    <ChallengesProvider
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
      level={level}
    >
      <Container>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <SideBar />
        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile avatarUrl={avatar_url} name={name} />
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

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { username } = params
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()

  const { level, currentExperience, challengesCompleted } = req.cookies

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default Home
