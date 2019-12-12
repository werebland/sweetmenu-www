import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    background: 'black',
    primary: 'white',
    secondary: 'rgba(0,0,0,.32)'
  },
  space: [ 0, 16, 32, 48, 64 ],
  fontSizes: [ 14, 16, 18, 24, 32, 48, 72 ],
  radii: {
    default: 12,
  }
}

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
