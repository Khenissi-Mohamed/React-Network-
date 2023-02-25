import {useState} from 'react'
import Post from "./Post"
// import emptyImage from './images/empty.png'
import { ReactComponent as EmptyImageSvg } from './images/empty.svg'

function Feed() {

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

      const [posts, setPosts] = useState(initialPosts)

      const deletePost = (id) => {
        setPosts(posts.filter(p => p.id != id))
        console.log("posts", posts);
      }

      const contentPosts = <>
      <h3>Fil d'actualité :</h3>
        {posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} />)}
      </>

      const contentEmpty = <>
      <h3 align="center">
            {/* <img src={emptyImage} width='300' /> */}
            <EmptyImageSvg width="300" height="300" />
            Aucun post pour le moment
        </h3>
      </>

    return posts.length > 0 ? contentPosts : contentEmpty
}

export default Feed