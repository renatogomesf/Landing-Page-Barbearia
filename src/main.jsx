import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle.jsx'
import { theme } from './style/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
