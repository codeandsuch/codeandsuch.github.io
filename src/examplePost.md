---
title: "Hello world! 👋"
date: "2018-07-29"
path: "/hello-world"
---

Aute `Lorem` cillum magna `incididunt` quis irure do duis sit elit eu. Enim cupidatat et nulla pariatur cupidatat. Laborum adipisicing elit reprehenderit commodo qui do enim magna `magna` anim aliqua culpa tempor. Proident minim incididunt aliqua sunt ullamco. Elit tempor eiusmod culpa officia sint duis consequat dolore.

![Earth.](earth.jpg)_Earth._

```jsx
<Container>
  { posts.map(post => {
    const { title, path, date, cover } = post.node.frontmatter

    const textWithoutHTML = post.node.html.replace(/<[^>]*>/g, '')
    const readTime = readingTime(textWithoutHTML)

    return (
      <Post key={ path }>
        <PostLink to={ path }>
          <Title>{ title }</Title>
          <Subtext>
            { date }
            <SubtextDot>•</SubtextDot>
            { readTime.text }
          </Subtext>
          <Excerpt>{ post.node.excerpt }</Excerpt>
        </PostLink>
      </Post>
    )
  }) }
</Container>
```