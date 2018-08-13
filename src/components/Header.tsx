import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Container = styled.div`
  background-color: ${styles.color.darkgray};
  padding: 32px 16px;
  color: white;
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${styles.width.medium}) {
    height: ${styles.height.header};
    min-height: 140px;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
`

const Title = styled.h1`
  font-size: 5rem;
  line-height: 4.5rem;
  text-align: center;
  text-transform: lowercase;

  /* @media only screen and (min-width: ${styles.width.medium}) {
  } */
`

const Subtext = styled.h4`
  font-size: 1.6rem;
  line-height: 4rem;
  display: flex;
`

const Highlight = styled.span`
  color: ${styles.color.purple};
  margin: 0 .5rem;
`

const Header: React.SFC<{}> = () => {
  // const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
  // const readTime = readingTime(textWithoutHTML)

  return (
    <Container>
      <Contents>
        <Title>Code Stuff</Title>
        <Subtext>
          A blog about <Highlight>code</Highlight> and stuff
        </Subtext>
      </Contents>
    </Container>
  )
}

export default Header
