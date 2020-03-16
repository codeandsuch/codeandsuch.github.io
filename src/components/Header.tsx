import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

import bg from '../assets/bg-blue-noise.png'
import styles from '../styles'

const Container = styled(Link)`
  background-color: #2b2a2f;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: height 0.1s ease-out;
  height: ${(p: any) => (p.to.state.compressed ? '5rem' : '20rem')};
  padding: ${(p: any) => (p.to.state.compressed ? 0 : '32px 16px')};
  position: ${(p: any) => (p.to.state.compressed ? 'fixed' : 'normal')};
  box-shadow: ${(p: any) =>
    p.to.state.compressed ? '0 3px 5px rgba(57, 63, 72, 0.15)' : 'none'};
  z-index: 99;

  @media (max-width: ${styles.width.medium}px) {
    height: ${(p: any) => (p.to.state.compressed ? '5rem' : '17rem')};
  }
`

const Inner = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100%;
`

const Contents = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;
  text-align: center;
`

const Title = styled.h1`
  font-size: ${(p: Props) => (p.compressed ? '2.3rem' : '2.7rem')};
  line-height: ${(p: Props) => (p.compressed ? '2.5rem' : '3rem')};
  letter-spacing: ${(p: Props) => (p.compressed ? '1.1px' : '1.5px')};
  transition: font-size 1s ease;
`

const Highlight = styled.span`
  color: ${styles.color.lightblue};
  font-size: 0.85em;
  margin: ${(p: Props) =>
    p.compressed ? '0 .35rem 0 .3rem' : '0 .6rem 0 .5rem'};
  font-weight: 600;
`

const Subtext = styled.h4`
  font-size: ${(p: Props) => (p.compressed ? '1.05rem' : '1.1rem')};
  line-height: 1.6;
  display: flex;
  letter-spacing: 0.75px;
  color: ${styles.color.subtext};
  font-weight: normal;
  transition: font-size 0.5s ease;
  margin-top: 0.2rem;
`

interface Props {
  compressed?: boolean
}

const Header: React.SFC<Props> = ({ compressed }) => (
  <Container
    to={{
      pathname: '/',
      state: { compressed },
    }}
  >
    <Inner>
      <Contents>
        <Title compressed={compressed}>
          code
          <Highlight compressed={compressed}>&</Highlight>
          such
        </Title>
        {!compressed && (
          <Subtext compressed={compressed}>A blog about code, and such.</Subtext>
        )}
      </Contents>
    </Inner>
  </Container>
)

export default Header
