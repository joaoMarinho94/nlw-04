import React from 'react'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from '../styles/global'
import { ThemesProvider } from '../contexts/theme'

import 'react-toastify/dist/ReactToastify.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </ThemesProvider>
  )
}

export default MyApp
