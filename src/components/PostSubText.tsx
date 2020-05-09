import React from 'react'
import styled from 'styled-components'
import styles from '../styles'

export const StyledPostSubText = styled.small`
  color: ${styles.color.grayblue};
  font-size: 1.35rem;
  white-space: break-spaces;
  display: block;

  >:not(:last-child) {
    margin-right: 2.5rem;

    @media (max-width: ${styles.width.small}px) {
      margin-right: 1.5rem;
    }
  }
`

interface Props {
  twitterUrl?: string;
  author: string;
  date: string;
  readTime: string;
}

const PostSubText: React.SFC<Props> = ({ author, twitterUrl, date, readTime }) => (
  <StyledPostSubText>
    <a href={twitterUrl}>{author}</a>    •   📅 {date}   •   ☕ {readTime}
  </StyledPostSubText>
)

export default PostSubText;
