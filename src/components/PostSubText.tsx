import React from 'react'
import styled from 'styled-components'
import styles from '../styles'

export const Container = styled.div`
  grid-area: subtext;
  flex-grow: 1;
  color: ${styles.color.grayblue};
  font-size: 1.42rem;

  >:not(:last-child) {
    margin-right: 2.5rem;

    @media (max-width: ${styles.width.small}px) {
      margin-right: 1.5rem;
    }
  }
`

const ItemGroup = styled.div`
  display: inline-block;

  > :nth-child(2) {
    margin-left: 0.7rem;

    @media (max-width: ${styles.width.small}px) {
      margin-left: 0.5rem;
    }
  }
`

const avatarSize = '1.7rem';
export const PostAvatar = styled.figure`
  width: ${avatarSize};
  height: ${avatarSize};
  margin-right: 0.3rem;
  grid-area: avatar;
  display: inline-flex;
  flex-shrink: 0;
  background: ${(props: {twitterAvatarUrl: string}) => `url(${props.twitterAvatarUrl})`};
  background-size: cover;
`

interface Props {
  twitterAvatarUrl: string;
  twitterUrl?: string;
  author: string;
  date: string;
  readTime: string;
}

const PostSubText: React.SFC<Props> = ({ twitterAvatarUrl, twitterUrl, author, date, readTime }) => {
  const ResolvedPostAvatar = (
    <ItemGroup>
      <PostAvatar twitterAvatarUrl={twitterAvatarUrl} />
      <span>{author}</span>
    </ItemGroup>
  )

  return (
    <Container>
      {twitterUrl
        ? <a href={twitterUrl}>{ResolvedPostAvatar}</a>
        : ResolvedPostAvatar
      }

      <ItemGroup>
        <span>📅</span>
        <span>{date}</span>
      </ItemGroup>

      <ItemGroup>
        <span>☕</span>
        <span>{readTime}</span>
      </ItemGroup>
    </Container>
  )
}

export default PostSubText;
