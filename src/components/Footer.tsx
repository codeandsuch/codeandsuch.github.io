import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Text = styled.footer`
  text-align: center;
  margin: 4rem 0 2.5rem 0;
  font-size: 1.4em;
  color: ${styles.color.lightgrey};

  @media only screen and (max-width: ${styles.width.medium}) {
    font-size: 1.2em;
  }
`

const Footer = () => (
  <Text>
    MIT Ⓒ Kalle Bornemark
  </Text>
)

export default Footer
