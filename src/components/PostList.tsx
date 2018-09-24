import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'

const Post = styled.div`
  background-color: ${styles.color.lightgrey};
  margin-bottom: 16px;
  color: ${styles.color.darkgrey};

  &:hover {
    background-color: ${styles.color.hover};
  }
`

const PostLink = styled(Link)`
  display: block;
  padding: 24px;
`

const Title = styled.h3`
  font-size: 2.8rem;
  line-height: 4rem;

  @media only screen and (max-width: ${styles.width.medium}px) {
    font-size: 2.3em;
    line-height: 3.5rem;
  }
`

const Subtext = styled.h4`
  font-size: 1.4rem;
  line-height: 4rem;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: ${styles.width.medium}px) {
    font-size: 1.4em;
    line-height: 2.7rem;
    margin: 1.5rem 0;
  }
`

const SubtextDot = styled.div`
  margin: 0 12px;
`

const Excerpt = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;

  @media only screen and (max-width: ${styles.width.medium}px) {
    font-size: 1.4rem;
  }
`

interface Props {
  posts: Post[]
}

const Posts: React.SFC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => {
      const { title, path, author, date } = post.node.frontmatter

      const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
      const readTime = readingTime(textWithoutHTML)

      return (
        <Post key={path}>
          <PostLink to={path}>
            <Title>{title}</Title>
            <Subtext>
              {author}
              <SubtextDot>•</SubtextDot>
              {date}
              <SubtextDot>•</SubtextDot>
              {readTime.text}
            </Subtext>
            <Excerpt>{post.node.excerpt}</Excerpt>
          </PostLink>
        </Post>
      )
    })}
  </div>
)

export default Posts
