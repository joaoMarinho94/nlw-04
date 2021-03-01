import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useSound from 'use-sound'
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../contexts/theme'

import { Container } from '../styles/pages'
import Input from '../components/Input'

const Index: React.FC = () => {
  const { push } = useRouter()
  const { theme, ToggleTheme } = useTheme()

  const [username, setUsername] = useState('')

  const [play] = useSound(
    theme.title === 'dark' ? '/sounds/turn-off.mp3' : '/sounds/turn-on.mp3'
  )

  function handleClick() {
    ToggleTheme()
    play()
  }

  function handleUsername(e: React.FormEvent<EventTarget>) {
    e.preventDefault()

    push(`/${username}`)
  }

  return (
    <Container>
      <section>
        <div className="left-side">
          <button type="button" onClick={handleClick}>
            {theme.title === 'light' ? (
              <FiMoon size={30} />
            ) : (
              <FiSun size={30} />
            )}
          </button>
        </div>
        <div className="right-side">
          <img src="white-logo-full.svg" alt="Logo" />

          <div>
            <strong>Bem-vindo</strong>

            <div className="title-container">
              <FiGithub size={45} />
              <span>Faça login com seu Github para começar</span>
            </div>

            <form onSubmit={handleUsername}>
              <Input
                placeholder="Digite seu username"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </form>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Index
