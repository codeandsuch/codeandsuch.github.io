import React from 'react'
import styled from 'styled-components'

import facebookIcon from '../assets/facebook-color.svg'
import twitterIcon from '../assets/twitter-color.svg'
import styles from '../styles'


const facebookAppId = '961873467305779'

const Container = styled.div`
  width: 100%;
  max-width: 700px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex;
  width: 100%;
  padding: 0 16px;
`

const Divider = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 40px 0;
  line-height: 0px;
  letter-spacing: 20px;
  color: ${styles.color.lightgrey};
`

const ShareLink = styled.a`
  margin-left: 16px;
`

const ShareIcon = styled.img`
  width: 32px;
  height: 32px;
`

const ShareItem = (props: { icon: string; alt: string; link: string }) => (
  <ShareLink href={props.link} target="_blank" rel="noreferrer noopener">
    <ShareIcon src={props.icon} alt={props.alt} />
  </ShareLink>
)

const Share = (props: { link: string; title: string }) => (
  <Container>
    <Divider>°°°</Divider>
    <Content>
      {/* <Text>If you liked this post, help me spread the word:</Text> */}
      <ShareItem
        icon={facebookIcon}
        alt="Share on Facebook"
        link={`https://www.facebook.com/dialog/share?app_id=${facebookAppId}&href=${encodeURI(
          props.link
        )}`}
      />
      <ShareItem
        icon={twitterIcon}
        alt="Share on Twitter"
        link={`https://twitter.com/intent/tweet?text=${encodeURI(
          `${props.title} by @kalvixander ${props.link}`
        )}`}
      />
    </Content>
  </Container>
)

export default Share
