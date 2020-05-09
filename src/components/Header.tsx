import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Container = styled(Link)`
  background-color: ${styles.color.white};
  color: ${styles.color.darkblue};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: height 0.1s ease-out;
  height: ${(p: any) => (p.to.state.compressed ? '5rem' : '30vh')};
  position: ${(p: any) => (p.to.state.compressed ? 'fixed' : 'normal')};
  box-shadow: ${(p: any) =>
    p.to.state.compressed ? '0 3px 5px rgba(57, 63, 72, 0.15)' : 'none'};
  z-index: 99;
  padding: ${(p: any) => (p.to.state.compressed ? '0 2rem' : '0')};

  @media (max-width: ${styles.width.medium}px) {
    height: ${(p: any) => (p.to.state.compressed ? '5rem' : '50vh')};
  }
`

const Inner = styled.header`
  max-width: ${styles.width.contentMax}px;
  width: 100%;
  height: 100%;
`

const Contents = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;

  @media (max-width: ${styles.width.medium}px) {
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: ${(p: Props) => (p.compressed ? '2.3rem' : '4.5rem')};
  font-weight: 400;
  line-height: ${(p: Props) => (p.compressed ? '2.5rem' : '3rem')};
  letter-spacing: ${(p: Props) => (p.compressed ? '1.1px' : '0.7px')};
  transition: font-size 1s ease;

  @media (max-width: ${styles.width.medium}px) {
    font-size: ${(p: Props) => (p.compressed ? '2.3rem' : '4rem')};
  }
`

const Highlight = styled.span`
  font-size: 0.8em;
  color: ${styles.color.lightblue};
  margin: ${(p: Props) =>
    p.compressed ? '0 .35rem 0 .3rem' : '0 .6rem 0 .5rem'};
`

const Subtext = styled.h4`
  font-size: ${(p: Props) => (p.compressed ? '1.05rem' : '1.35rem')};
  color: ${styles.color.grayblue};
  line-height: 1.6;
  display: flex;
  font-weight: normal;
  transition: font-size 0.5s ease;
  margin-top: 1rem;

  @media (max-width: ${styles.width.medium}px) {
    font-size: ${(p: Props) => (p.compressed ? '1.05rem' : '1.2rem')};
    margin-top: 0.7rem;
  }
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
