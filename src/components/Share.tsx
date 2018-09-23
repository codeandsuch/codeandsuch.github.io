import React from 'react'
import styled from 'styled-components'

import twitterIcon from '../assets/twitter-color.svg'
import styles from '../styles'


const Container = styled.div`
  width: 100%;
  max-width: ${styles.width.contentMax}px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
`

const Divider = styled.div`
  user-select: none;
  width: 100%;
  font-size: 15px;
  margin: 10rem 0 6rem 0;
  line-height: 0px;
  letter-spacing: 20px;
  color: #c5c5c5;
  text-align: center;
`

const ShareLink = styled.a`
  display: flex;
  align-items: center;
  opacity: .7;
  &:hover {
    opacity: 1;
  }
`

const ShareIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`

const Text = styled.span`
  font-size: 1.6em;
`

const ShareItem = (props: { icon: string; alt: string; link: string, text: string }) => (
  <ShareLink href={props.link} target="_blank" rel="noreferrer noopener">
    <Text>{props.text}</Text>
    <ShareIcon src={props.icon} alt={props.alt} />
  </ShareLink>
)

const Share = (props: { link: string; title: string, twitterHandle: string }) => (
  <Container>
    <Divider>°°°</Divider>
    <Content>
      <ShareItem
        icon={twitterIcon}
        alt="Share on Twitter"
        link={`https://twitter.com/intent/tweet?text=${encodeURI(
          `${props.title} by ${props.twitterHandle} ${props.link}`
        )}`}
        text='Liked this post? Feel free to share it on Twitter!'
      />
    </Content>
  </Container>
)

export default Share
