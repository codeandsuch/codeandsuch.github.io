import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Text = styled.footer`
  text-align: center;
  margin: 4rem 0 2.5rem 0;
  font-size: 1.4em;
  color: ${styles.color.grey};

  @media (max-width: ${styles.width.medium}px) {
    font-size: 1.2em;
  }
`

const Link = styled.a`
  color: ${styles.color.green};
`

const Footer = () => (
  <Text>
    MIT Ⓒ <Link href="https://kallebornemark.github.io/">Kalle Bornemark</Link>
  </Text>
)

export default Footer
