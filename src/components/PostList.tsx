import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import readingTime from 'reading-time'

import styles from '../styles'
import { PostHeaderContents, PostAvatar, PostSubtext, PostTitle, PostSubtextEmoji, PostSubtextDot } from '../templates/post';

const Post = styled.div`
  background-color: ${styles.color.lightgrey};
  margin-bottom: 16px;

  &:hover {
    background-color: ${styles.color.hover};
  }
`

const PostLink = styled(Link)`
  display: block;
  padding: 24px 0;
`

const PostListHeaderContents = styled(PostHeaderContents)`
  grid-row-gap: .4rem;
  grid-column-gap: 1.5rem;
  grid-template-columns: min-content 1fr;
  grid-template-areas:
    'avatar title'
    'avatar subtext'
    'excerpt excerpt';
  @media (max-width: ${styles.width.small}px) {
    grid-template-columns: 1fr min-content;
    grid-template-areas:
      'title title'
      'subtext avatar'
      'excerpt excerpt';
  }
`

const PostListTitle = styled(PostTitle)`
  font-size: 2.4em;
  line-height: 3.4rem;

  @media (max-width: ${styles.width.medium}px) {
    font-size: 2.4em;
    line-height: 3.4rem;
  }
`

const PostListSubtext = styled(PostSubtext)`
  @media (max-width: ${styles.width.small}px) {
    flex-direction: column;
    align-items: flex-start;
    >:not(:last-child) {
      margin-bottom: .2rem;
    }
  }
`

const PostListAvatar = styled(PostAvatar)`
  width: 33px;
  height: 33px;
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

const Posts: React.SFC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => {
      const {
        frontmatter: { title, path, author, date, twitterHandle },
        fields: { twitterAvatarUrl }
      } = post.node

      const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
      const readTime = readingTime(textWithoutHTML)
      const twitterUrl = `https://www.twitter.com/${twitterHandle}`

      return (
        <Post key={path}>
          <PostLink to={path}>
            <PostListHeaderContents>
              <PostListAvatar src={twitterAvatarUrl} href={twitterUrl} />
              <PostListTitle>{title}</PostListTitle>
              <PostListSubtext>
                <div><PostSubtextEmoji>📝</PostSubtextEmoji><a href=''>{author}</a></div>
                <PostSubtextDot>•</PostSubtextDot>
                <div><PostSubtextEmoji>📅</PostSubtextEmoji><span>{date}</span></div>
                <PostSubtextDot>•</PostSubtextDot>
                <div><PostSubtextEmoji>☕</PostSubtextEmoji><span>{readTime.text}</span></div>
              </PostListSubtext>
              <Excerpt>{post.node.excerpt}</Excerpt>
            </PostListHeaderContents>
          </PostLink>
        </Post>
      )
    })}
  </div>
)

export default Posts
