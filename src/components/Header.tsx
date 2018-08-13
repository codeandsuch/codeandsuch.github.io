import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import styles from '../styles'

const Container = styled.div`
  /* background-color: ${styles.color.darkgray}; */
  /* background: linear-gradient(${styles.color.darkgray}, ${lighten(.05, styles.color.darkgray)}); */
  /* background: linear-gradient(${lighten(.02, styles.color.darkgray)}, ${styles.color.darkgray}); */
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

  @media only screen and (max-width: ${styles.width.medium}) {
    margin-bottom: 0;
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
`

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  text-transform: lowercase;
`

const Subtext = styled.h4`
  font-size: 1.6rem;
  line-height: 4rem;
  display: flex;
`

const Highlight = styled.span`
  color: ${styles.color.purple};
  font-size: .9em;
  margin: 0 1rem;
`

const Header: React.SFC<{}> = () => (
  <Container>
    <Contents>
      <Title>Code<Highlight>🙴</Highlight>Stuff</Title>
      <Subtext>
        A blog about code... and stuff
      </Subtext>
    </Contents>
  </Container>
)

export default Header
