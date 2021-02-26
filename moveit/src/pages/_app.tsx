import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default MyApp
