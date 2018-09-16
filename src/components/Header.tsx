import React from 'react'
import styled from 'styled-components'
import styles from '../styles'
import Link from 'gatsby-link'
import bg from '../assets/bg-blue-noise.png';

const Container = styled(Link)`
  /* background-color: ${styles.color.darkblue}; */
  background-image: url(${bg});
  padding: 32px 16px;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p: Props) => p.compressed ? '10rem' : '20rem'};
  cursor: pointer;
  transition: height 1s ease;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`

const Title = styled.h1`
  font-size: ${(p: Props) => p.compressed ? '2.9rem' : '3.3rem'};
  line-height: ${(p: Props) => p.compressed ? '2.5rem' : '3rem'};
  letter-spacing: ${(p: Props) => p.compressed ? '1.2px' : '1.5px'};
  transition: font-size 1s ease;
`

const Highlight = styled.span`
  color: ${styles.color.purple};
  font-size: .9em;
  margin: 0 .6rem 0 .5rem;
  font-weight: normal;
`

const Subtext = styled.h4`
  font-size: ${(p: Props) => p.compressed ? '1.15rem' : '1.3rem'};
  line-height: 2.5rem;
  display: flex;
  letter-spacing: .5px;
  color: ${styles.color.subtext};
  font-weight: normal;
  transition: font-size .5s ease;
`

interface Props {
  compressed?: boolean;
}

const Header: React.SFC<Props> = ({ compressed }) => (
  <Container to='/' { ...{ compressed } }>
    <Contents>
      <Title { ...{ compressed } }>code<Highlight>&</Highlight>such</Title>
      <Subtext { ...{ compressed } }>
        A blog about code, and such.
      </Subtext>
    </Contents>
  </Container>
)

export default Header
