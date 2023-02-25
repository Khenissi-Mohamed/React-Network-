import { useState } from "react"

function CreatePost() {


    const [postText, setPostText] = useState('')

    const onChangeHandler = (event) => {
     setPostText(event.target.value)
    //  console.log(event.target.value)
    }
    const createPostHandler = (event) => {
        console.log("creation de posts", postText)
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