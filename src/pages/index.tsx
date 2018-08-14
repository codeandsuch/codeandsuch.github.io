import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import PostList from '../components/PostList'
import styles from '../styles'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Contents = styled.div`
  padding: 0 16px;
  max-width: 1200px;

  @media only screen and (max-width: ${styles.width.medium}) {
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
            date(formatString: "Do MMMM YYYY")
            title
          }
          excerpt(pruneLength: 235)
          html
        }
      }
    }
  }
`
