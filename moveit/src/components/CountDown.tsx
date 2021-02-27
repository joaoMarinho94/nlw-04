import React, { useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'

import { Container, CountdownButton } from '../styles/components/CountDown'

export const CountDown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountDownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled>Ciclo encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              className="active"
              type="button"
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton type="button" onClick={startCountDown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  )
}
