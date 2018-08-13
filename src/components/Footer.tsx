import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const footerStyles = {
  width: {
    large: '1200px',
  },
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 1rem;

  @media only screen and (min-width: ${styles.width.medium}) {
    margin-top: 32px;
  }

  @media only screen and (min-width: ${footerStyles.width.large}) {
    margin-top: 64px;
    padding: 16px 0;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${styles.width.medium}) {
    max-width: ${styles.width.max};
  }
`

const Text️ = styled.p`
  font-size: 1.2em;
  color: ${styles.color.lightgrey};

  @media only screen and (min-width: ${styles.width.medium}) {
    font-size: 1.4em;
  }
`

const Footer = () => (
  <Container>
    <Contents>
      <Text️>Ⓒ Kalle Bornemark</Text️>
    </Contents>
  </Container>
)

export default Footer
