import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

import Footer from '../components/Footer'
import favicon16 from './favicons/16.png'
import styles from '../styles'

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    font-size: 10px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }

  body {
    min-height: 100%;
    color: hsla(0,0%,0%,0.9);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`

interface Props {
  children: () => JSX.Element
}

class Template extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <Container>
        <GlobalStyles />
        <Helmet title="code & such">
          <html lang="en" />

          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />

          <meta name="theme-color" content={styles.color.darkblue} />
        </Helmet>

        {/* <Header /> */}
        {children()}
        <Footer />
      </Container>
    )
  }
}

export default Template
