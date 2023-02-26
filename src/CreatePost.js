import { useState} from "react"

function CreatePost({addPost}) {


    const [postText, setPostText] = useState('')
    const [postPicture, setPostPicture] = useState('')

    

    const onPostTextHandler = (event) => {
     setPostText(event.target.value)
    //  console.log(event.target.value)
    }

    const onPictureChangeHandler = (event) => {
      setPostPicture(event.target.value)
     //  console.log(event.target.value)
     }
    const createPostHandler = (event) => {
      addPost(postText, postPicture)
      // permet de repartir avec un champs vide apres le click sur le btn publication
      setPostText('')
      setPostPicture('')
    }

  return (
    <>
    <div>Nouveau post</div>
    Texte : <input onChange={onPostTextHandler} type={postText} value={postText} /> <br />
    Image : <input onChange={onPictureChangeHandler} type={postText} value={postPicture} />
    {/* trim() est une fonction js qui supprime les espaces de ma variable et permet de verifier que mon champ ne soit pas vide */}
    { postText.trim() != '' && <button onClick={createPostHandler}>Publier</button>
    
    }
    </>
  )
}

export default CreatePost