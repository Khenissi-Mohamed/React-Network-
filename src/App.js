
import Header from "./Header"
import Feed from "./Feed"
import CreatePost from "./CreatePost"
import {useState} from 'react'


const initialPosts = [
  {id: 12,
  author: "Hugo Bordes",
  authorPicture: 'https://picsum.photos/seed/profile11/50/50',
  text: "Bonjour tout le monde !",
  postPicture: 'https://picsum.photos/seed/postpicure-12/500/300',
  date: new Date(Date.now() - 1*3600*1000),
  likes: 42
  },
  {id: 55,
  author: "Antoine Morin",
  authorPicture: 'https://picsum.photos/seed/profile12/50/50',
  text: "Comment allez-vous ?",
  postPicture: 'https://picsum.photos/seed/postpicure-18/500/300',
  date: new Date(Date.now() - 2*3600*1000),
  likes: 35
  },
  {id: 90,
  author: "Léa Dumont",
  authorPicture: 'https://picsum.photos/seed/profile13/50/50',
  text: "Vive React.JS",
  postPicture: 'https://picsum.photos/seed/postpicure-16/500/300',
  date: new Date(Date.now() - 3*3600*1000),
  likes: 17
  },
]

const currentUser = {
  author: "Nouvel utilisateur",
  authorPicture: "https://picsum.photos/seed/profile53/50/50"
}

function App() {

  const [posts, setPosts] = useState(initialPosts)

// Suppression à l'aide de la methode filter
  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id != id))
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

  return (
    <>
    <Header />
    <CreatePost addPost={addPost} />
    <Feed posts={posts} deletePost={deletePost} />
    
    </>
  )
}
export default App