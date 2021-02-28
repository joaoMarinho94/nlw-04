import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Overlay, Container } from '../styles/components/LevelUpModal'

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou un novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="close" />
        </button>
      </Container>
    </Overlay>
  )
}
