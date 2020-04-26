import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import PostList from '../components/PostList'
import styles from '../styles'
import 'typeface-montserrat';

const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

const Contents = styled.div`
  @media (max-width: ${styles.width.medium}px) {
    padding: 0;
  }
`

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Post[]
    }
  }
}

class Main extends React.Component<Props> {
  render() {
    const { data } = this.props

    const posts: any = data ? data.allMarkdownRemark.edges : []

    return (
      <Container>
        <Header />
        <Contents>
          <PostList posts={posts.slice(0)} />
        </Contents>
      </Container>
    )
  }
}

export default Main

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            author
            date(formatString: "YYYY-MM-DD")
            title
          }
          fields {
            twitterAvatarUrl
          }
          excerpt(pruneLength: 235)
          html
        }
      }
    }
  }
`
