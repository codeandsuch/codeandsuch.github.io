import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import readingTime from 'reading-time'
import Link from 'gatsby-link'

import Header from '../components/Header'
import styles from '../styles'
import './prism.css'
import Share from '../components/Share';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`

const PostHeader = styled.header`
  width: 100%;
  background-color: ${styles.color.lightgrey};
  /* clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 100%, 4% 50%); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0 56px;
  margin-top: 5rem;
  margin-bottom: 32px;
  min-height: 20rem;

  @media only screen and (max-width: ${styles.width.medium}px) {
    padding: 32px 0 28px;
  }
`

const HeaderContents = styled.div`
  max-width: ${styles.width.contentMax}px;
  width: 100%;
  padding: 0 16px;
`

const BackButton = styled.div`
  width: 100%;
  max-width: ${styles.width.contentMax}px;
  font-size: 2em;
  padding: 0 16px;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  color: ${styles.color.darkblue};
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 3.2em;

  @media only screen and (max-width: ${styles.width.medium}px) {
    margin-bottom: 2rem;
    font-size: 2.5em;
  }
`

const Subtext = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${styles.color.grayblue};
  font-size: 1.6em;
`

const SubtextAvatar = styled.div((props: any) => ({
  borderRadius: "50%",
  background: `url(${props.src})`,
  width: 48,
  height: 48,
  marginRight: 10
}))

const SubtextDot = styled.span`
  margin: 0 12px;
`

const Content = styled.article`
  max-width: ${styles.width.contentMax}px;
  font-size: 1.6em;
  line-height: 1.8em;
  color: ${styles.color.darkgrey};
  padding: 0 16px;
  width: 100%;

  @media only screen and (max-width: ${styles.width.medium}px) {
    font-size: 1.4rem;
  }


  & > *:not(:first-child) {
    margin-top: 32px;
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
  }

  a {
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
      fields: {
        twitterAvatarUrl
      }
    } = this.props.data.markdownRemark

    const textWithoutHTML = html.replace(/<[^>]*>/g, '')
    const readTime = readingTime(textWithoutHTML)

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`}>
          <meta name="description" content={excerpt} />
        </Helmet>

        <Header compressed/>

        <PostHeader>
          <HeaderContents>
            <Title>{title}</Title>
            <Subtext>
              <SubtextAvatar src={twitterAvatarUrl}></SubtextAvatar>
              {author}
              <SubtextDot>•</SubtextDot>
              {date}
              <SubtextDot>•</SubtextDot>
              {readTime.text}
            </Subtext>
          </HeaderContents>
        </PostHeader>

        <BackButton>
          <Link to='/'>←</Link>
        </BackButton>

        <Content dangerouslySetInnerHTML={{ __html: html }} />

        <Share link={`https://codeandsuch.github.io${path}`} { ...{ title, twitterHandle } }/>
      </Container>
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
