import React from 'react'

import { Container } from '../styles/components/ChallengeBox'

export const ChallengeBox: React.FC = () => {
  const hasactiveChallenge = true

  return (
    <Container>
      {hasactiveChallenge ? (
        <div className="challenge-active">
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="icon" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <button type="button" className="failed-button">
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
