
import Header from "./Header"
import Feed from "./Feed"
import CreatePost from "./CreatePost"
import {useState} from 'react'


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
    // console.log("posts", posts);
  }

  const addPost = (post) => {
    setPosts([...posts, post])
    // console.log(addPost)
  }

  return (
    <>
    <Header />
    <CreatePost addPost={addPost} />
    <Feed posts={posts} deletePost={deletePost} />
    
    </>
  )
}
export default App