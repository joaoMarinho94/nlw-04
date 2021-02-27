import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Container } from '../styles/components/Profile'

export const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <img src="https://github.com/joaoMarinho94.png" alt="imagem" />
      <div>
        <strong>João Paulo</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}
