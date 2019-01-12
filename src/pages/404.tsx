import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import styles from '../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`

const Error = styled.p`
  font-size: 6.4rem;
  line-height: 7.2rem;
  margin-bottom: 16px;
  font-weight: bold;
  color: ${styles.color.darkblue};
  text-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: ${styles.width.max}px) {
    font-size: 12rem;
    line-height: 12.8rem;
  }
`

const Title = styled.h1`
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin-bottom: 32px;
  text-align: center;
  color: ${styles.color.darkgrey};

  @media (min-width: ${styles.width.max}px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`

const HomeButton = styled.div`
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 16px;
  background-color: ${styles.color.darkblue};
  color: white;
  border-radius: 4px;
`

const FourOhFour = () => (
  <Container>
    <Error>404</Error>
    <Title>Oops, There's Nothing Here</Title>

    <Link to="/">
      <HomeButton>Go Back Home</HomeButton>
    </Link>
  </Container>
)

export default FourOhFour
