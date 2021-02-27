import React, { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface ChallengesProviderProps {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'yey'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  startNewChallenge: () => void
  resetChallenge: () => void
  completedChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }): ChallengesProviderProps {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setchallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completedChallenge() {
    if (!activeChallenge) return

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setchallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completedChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
