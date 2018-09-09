import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import styles from '../styles'
import Link from 'gatsby-link'

const Container = styled(Link)`
  /* background: linear-gradient(${styles.color.darkblue}, ${lighten(.05, styles.color.darkblue)}); */
  /* background: linear-gradient(${lighten(.02, styles.color.darkblue)}, ${styles.color.darkblue}); */
  background-color: ${styles.color.darkblue};
  padding: 32px 16px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p: Props) => p.compressed ? '12rem' : '20rem'};
  cursor: pointer;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`

const Title = styled.h1`
  font-size: 3.3rem;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 1.5px;
`

const Highlight = styled.span`
  color: ${styles.color.purple};
  font-size: .9em;
  margin: 0 .6rem 0 .5rem;
  font-weight: normal;
`

const Subtext = styled.h4`
  font-size: 1.3rem;
  line-height: 2.5rem;
  display: flex;
  letter-spacing: .5px;
  color: ${styles.color.subtext};
  font-weight: normal;
`

interface Props {
  compressed?: boolean;
}

const Header: React.SFC<Props> = props => (
  <Container { ...props } to='/'>
    <Contents>
      <Title>code<Highlight>&</Highlight>such</Title>
      <Subtext>
        A blog about code, and such.
      </Subtext>
    </Contents>
  </Container>
)

export default Header
