import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import readingTime from 'reading-time'
import Link from 'gatsby-link'

import Header from '../components/Header'
import styles from '../styles'
import './prism.css'
import Share from '../components/Share';
import PostSubText from '../components/PostSubText'

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  padding: 0 2rem;
`

const PostHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  margin: 15rem 0 10rem;

  @media (max-width: ${styles.width.small}px) {
    margin: 9rem 0 2rem;
  }
`

const BackButton = styled.div`
  width: 100%;
  max-width: ${styles.width.contentMax}px;
  font-size: 2em;
  margin-bottom: 2rem;
`

export const PostHeaderContents = styled.div`
  max-width: ${styles.width.contentMax}px;
  width: 100%;
  display: grid;
  grid-row-gap: 2.5rem;
  grid-column-gap: 1.5rem;
  grid-template-areas:
    'title'
    'subtext';
`

export const PostTitle = styled.h1`
  grid-area: title;
  color: ${styles.color.darkblue};
  font-weight: bold;
  font-size: 3.2em;

  @media (max-width: ${styles.width.small}px) {
    font-size: 2.4em;
  }
`

export const PostSubtextIcon = styled.span`
  @media (min-width: ${styles.width.small}px) {
    margin: 0 1rem;
    :first-child {
      margin-left: 0;
    }
  }
`

export const PostSubtextDot = styled.span`
  margin: 0 1.5rem;
  opacity: 0.8;
  @media (max-width: ${styles.width.small}px) {
    margin: 0 1rem;
  }
`

const Content = styled.div`
  max-width: ${styles.width.contentMax}px;
  font-size: 1.8em;
  line-height: 1.8em;
  color: ${styles.color.darkgrey};
  /* padding: 0 16px; */
  width: 100%;

  @media (max-width: ${styles.width.medium}px) {
    font-size: 1.5em;
  }


  & > *:not(:first-child) {
    margin-top: 32px;
  }

  h2 {
    font-size: 1.3em;
  }

  h2 + *,  h3 + *, h4 + *, h5 + *, h6 + * {
    margin-top: 16px !important;
  }

  hr {
    border-top: none;
    border-color: lightgray;
  }

  ul,
  ol {
    margin-left: 1.1em;

    > li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  a {
    word-break: break-all;
    color: ${styles.color.turquoise};
    text-decoration: underline;
    :visited {
      color: ${styles.color.turquoise};
    }
  }

  img {
    border-radius: 4px;
    max-width: 100%;
  }

  img + em,
  .gatsby-resp-image-wrapper + em {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    font-style: normal;
    line-height: 2rem;
    text-align: center;
    margin-top: 8px;
  }

  pre {
    overflow: auto;
    padding: 12px;
    font-size: 1.4rem;
    border-radius: 4px;
    word-break: break-all;

    code {
      padding: 0;
    }
  }

  /* Inline code */
  code {
    background-color: #f8f8f8;
    padding: 4px 8px;
    font-size: 14px;
  }

  blockquote {
    background-color: ${styles.color.darkblue};
    padding-left: 8px;
    color: #757575;
    font-style: italic;

    & p {
      background-color: white;
      padding-left: 8px;
    }
  }

  iframe {
    border: none;
  }

  p > a {
    word-break: keep-all;
  }
`

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    markdownRemark: Post
  }
}

class BlogPost extends React.Component<Props> {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
      ? this.props.data.site.siteMetadata.title
      : null

    const {
      frontmatter: { title, date, author, path, twitterHandle },
      html,
      excerpt,
      fields: { twitterAvatarUrl }
    } = this.props.data.markdownRemark

    const textWithoutHTML = html.replace(/<[^>]*>/g, '')
    const readTime = readingTime(textWithoutHTML)
    const twitterUrl = `https://www.twitter.com/${twitterHandle}`

    return (
      <>
        <Header compressed/>
        <Container>
          <Helmet title={`${title} | ${siteTitle}`}>
            <meta name="description" content={excerpt} />
          </Helmet>

          <PostHeader>
            <PostHeaderContents>
              <PostTitle>{title}</PostTitle>
              <PostSubText
                twitterAvatarUrl={twitterAvatarUrl}
                twitterUrl={twitterUrl}
                author={author}
                date={date}
                readTime={readTime.text}
              />
            </PostHeaderContents>
          </PostHeader>

          <BackButton>
            <Link to='/'>←</Link>
          </BackButton>

          <Content dangerouslySetInnerHTML={{ __html: html }} />

          <Share link={`https://codeandsuch.github.io${path}`} { ...{ title, twitterHandle } }/>
        </Container>
      </>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      excerpt(pruneLength: 320)
      frontmatter {
        title
        author
        date(formatString: "Do MMMM YYYY")
        path
        twitterHandle
      }
      fields {
        twitterAvatarUrl
      }
    }
  }
`
