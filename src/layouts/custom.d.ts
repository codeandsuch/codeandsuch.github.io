declare const graphql: (query: TemplateStringsArray) => void

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

type Post = {
  frontmatter: {
    title: string
    path: string
    author: string
    date: string
    twitterHandle: string
  }
  excerpt: string
  html: string
  node: any
}
