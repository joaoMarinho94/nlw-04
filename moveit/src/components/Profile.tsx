import React from 'react'

import Link from 'next/link'
import { Container } from '../styles/components/Profile'
import { FiLogOut } from 'react-icons/fi'
import { useProvider } from '../contexts/ChallengesContext'

interface IUserGithub {
  name: string
  avatarUrl: string
}

export const Profile: React.FC<IUserGithub> = ({ avatarUrl, name }) => {
  const { level } = useProvider()

  return (
    <Container>
      <img src={avatarUrl} alt={name} />

      <div>
        <strong>{name?.split(' ')[0]}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>

      <Link href="/">
        <FiLogOut size={25} />
      </Link>
    </Container>
  )
}
