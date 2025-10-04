import { PostList } from './components/PostList.jsx'

const posts = [
  {
    title: 'Full-Stack React Projects',
    contents: "Let's become full-stack developers!",
    author: 'Lance Perkins',
  },
  { title: 'Hello React!' },
]

export function App() {
  return <PostList posts={posts} />
}
