import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Container } from '../styles/components/ChallengeBox'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <Container>
      {activeChallenge ? (
        <div className="challenge-active">
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="icon" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="failed-button"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className="succeeded-button">
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="not-active">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </Container>
  )
}
