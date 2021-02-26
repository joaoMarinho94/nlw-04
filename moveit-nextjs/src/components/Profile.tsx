import React from 'react'

import { Container } from '../styles/components/Profile'

export const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/joaoMarinho94.png" alt="imagem" />
      <div>
        <strong>João Paulo</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </Container>
  )
}
