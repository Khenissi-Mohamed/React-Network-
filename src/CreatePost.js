import { useState } from "react"

function CreatePost({addPost}) {


    const [postText, setPostText] = useState('')

    const onChangeHandler = (event) => {
     setPostText(event.target.value)
    //  console.log(event.target.value)
    }
    const createPostHandler = (event) => {
      const newPost = {
        id: Math.floor(1000 * Math.random()) ,
        text: postText,
        author: "Nouvel utilisateur",
        likes: 0
        }
      addPost(newPost)
    }

  return (
    <>
    <div>Nouveau post</div>
    <input onChange={onChangeHandler} type={postText} />
    <button onClick={createPostHandler}>Publier</button>
    </>
  )
}

export default CreatePost