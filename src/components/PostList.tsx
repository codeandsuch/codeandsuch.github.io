import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'
import { PostTitle } from '../templates/post';
import PostSubText from './PostSubText'

const Container = styled.div`
  margin: 0 -2rem;
`

const Post = styled.article`
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

  > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`

const PostListTitle = styled(PostTitle)`
  font-size: 2em;
  line-height: 3rem;

  @media (max-width: ${styles.width.medium}px) {
    font-size: 1.8em;
    line-height: 3rem;
  }
`

const Excerpt = styled.p`
  font-size: 1.5rem;
  grid-area: excerpt;
  line-height: 2.5rem;
  opacity: .8;

  @media (max-width: ${styles.width.medium}px) {
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
      } = post.node

      const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
      const readTime = readingTime(textWithoutHTML)

      return (
        <Post key={path}>
          <PostLink to={path}>
            <PostListTitle>{title}</PostListTitle>
            <PostSubText
              author={author}
              date={date}
              readTime={readTime.text}
            />
            <Excerpt>{post.node.excerpt}</Excerpt>
          </PostLink>
        </Post>
      )
    })}
  </Container>
)

export default PostList
