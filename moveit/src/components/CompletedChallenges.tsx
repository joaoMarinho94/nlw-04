import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Container } from '../styles/components/CompletedChallenges'

export const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}
