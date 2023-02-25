import Post from "./Post"
import {useState} from 'react'
import Header from "./Header"

// const [posts, setPosts] = useState()

const initialPosts = [
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
  
  const [posts, setPosts] = useState(initialPosts)

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id != id))
    console.log("posts", posts);
  }

  return (
    <>
    <Header />
    <h1>Fil d'actualité :</h1>
    {posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} />)}
    </>
  )
}
export default App