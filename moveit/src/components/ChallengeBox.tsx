import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'

import { Container } from '../styles/components/ChallengeBox'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengeSuceeded() {
    completedChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }

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
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className="succeeded-button"
              onClick={handleChallengeSuceeded}
            >
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
