import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'
import { PostHeaderContents, PostTitle } from '../templates/post';
import PostSubText from './PostSubText'

const Container = styled.div`
  margin: 0 -2rem;
`

const Post = styled.div`
  padding: 2rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: ${styles.color.hover};
  }
`

const PostLink = styled(Link)`
  display: block;
  /* padding: 24px 0; */
`

const PostListHeaderContents = styled(PostHeaderContents)`
  grid-row-gap: .6rem;
  grid-column-gap: 1.5rem;
  grid-template-areas:
    'title'
    'subtext'
    'excerpt';
`

const PostListTitle = styled(PostTitle)`
  font-size: 2.1em;
  line-height: 3.4rem;

  @media (max-width: ${styles.width.medium}px) {
    font-size: 1.8em;
    line-height: 3rem;
  }
`

const Excerpt = styled.p`
  margin-top: 1rem;
  grid-area: excerpt;
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: .8;

  @media (max-width: ${styles.width.medium}px) {
    margin-top: .2rem;
    font-size: 1.4rem;
  }
`

interface Props {
  posts: Post[]
}

const PostList: React.SFC<Props> = ({ posts }) => (
  <Container>
    {posts.map(post => {
      const {
        frontmatter: { title, path, author, date },
        fields: { twitterAvatarUrl }
      } = post.node

      const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
      const readTime = readingTime(textWithoutHTML)

      return (
        <Post key={path}>
          <PostLink to={path}>
            <PostListHeaderContents>
              <PostListTitle>{title}</PostListTitle>
              <PostSubText
                twitterAvatarUrl={twitterAvatarUrl}
                author={author}
                date={date}
                readTime={readTime.text}
              />
              <Excerpt>{post.node.excerpt}</Excerpt>
            </PostListHeaderContents>
          </PostLink>
        </Post>
      )
    })}
  </Container>
)

export default PostList
