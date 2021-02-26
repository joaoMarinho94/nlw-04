import React from 'react'

import { Container } from '../styles/components/ExperienceBar'

export const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}>
          <span className="current-experience" style={{ left: '50%' }}>
            300 xp
          </span>
        </div>
      </div>
      <span>600 xp</span>
    </Container>
  )
}
