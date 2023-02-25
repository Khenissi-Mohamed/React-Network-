import Post from "./Post"
import {useState} from 'react'
import Header from "./Header"

// const [posts, setPosts] = useState()

const posts = [
  {id: 12,
  text: "Bonjour tout le monde !",
  author: "Hugo Bordes",
  likes: 42
  },
  {id: 55,
  text: "Comment allez-vous ?",
  author: "Antoine Morin",
  likes: 35
  },
  {id: 90,
  text: "Vive React.JS",
  author: "Léa Dumont",
  likes: 17
  },
]

function App() {
  const textPost1 = "bonjour tt lmonde"
  return (
    <>
    <Header />
    <h1>Fil d'actualité :</h1>
    {posts.map(p =>
       <Post key={p.id} postData={p} />)}
    </>
  )
}
export default App