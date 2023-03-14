
import Header from "./Header"
import Feed from "./Feed"
import CreatePost from "./CreatePost"
import {useState, useEffect } from 'react'
import '../src/styles/App.css'


const initialPosts = [
  {id: 12,
  author: "Hugo Bordes",
  authorPicture: 'https://picsum.photos/seed/profile11/50/50',
  text: "Bonjour tout le monde !",
  postPicture: 'https://picsum.photos/seed/postpicure-12/500/300',
  date: new Date(Date.now() - 1*3600*1000),
  likes: 42,
  isLiked : true
  },
  {id: 55,
  author: "Antoine Morin",
  authorPicture: 'https://picsum.photos/seed/profile12/50/50',
  text: "Comment allez-vous ?",
  postPicture: 'https://picsum.photos/seed/postpicure-18/500/300',
  date: new Date(Date.now() - 2*3600*1000),
  likes: 35,
  isLiked : true

  },
  {id: 90,
  author: "Léa Dumont",
  authorPicture: 'https://picsum.photos/seed/profile13/50/50',
  text: "Vive React.JS",
  postPicture: 'https://picsum.photos/seed/postpicure-16/500/300',
  date: new Date(Date.now() - 3*3600*1000),
  likes: 17,
  isLiked : false

  },
]

const bouchonBackend = () => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("backend return...")
      resolve(initialPosts)
    }, 2000);
  })
}

const currentUser = {
  author: "Nouvel utilisateur",
  authorPicture: "https://picsum.photos/seed/profile53/50/50"
}

function App() {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    bouchonBackend().then(posts =>  {
      setPosts(posts)
      setIsloading(false)
      })
    }, [])

// Suppression à l'aide de la methode filter
  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
    // console.log("posts", posts);
  }

// Création à l'aide de la fonction createPostHandler qui execute ma fonction addPost
  const addPost = (postText, postPicture) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()) ,
      author: currentUser.author,
      authorPicture: currentUser.authorPicture,
      text: postText,
      postPicture: postPicture,
      date: new Date(),
      likes: 0
      }
    setPosts([...posts, newPost])
    // console.log(addPost)
  }

  const likePost = (id) => {
    const increment = posts.find(p => p.id == id).isLiked ? -1 : 1
    setPosts(posts.map(p => p.id == id ? {...p, likes: p.likes + increment, isLiked: !p.isLiked } : p))
  }

  return (
    <>
      <Header />
    <div className="center500px">
      <CreatePost addPost={addPost} />
      <Feed posts={posts} deletePost={deletePost} isLoading={isLoading} likePost={likePost} />
    </div>
    
    </>
  )
}
export default App