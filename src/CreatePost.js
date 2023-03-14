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
    <div className="post">

      <div className="create-post-row">
          <div>Text :</div>
          <input onChange={onPostTextHandler} type="text" value={postText} placeholder="Quoi de neuf aujourd'hui ?" /> 
      </div>
      <div className="create-post-row">
        <div>Photo :</div>
       <input onChange={onPictureChangeHandler} type="text" value={postPicture} placeholder="URL de votre photo" />
      </div>
      {/* trim() est une fonction js qui supprime les espaces de ma variable et permet de verifier que mon champ ne soit pas vide */}
      { postText.trim() != '' && (
        <div className="create-post-row">
        
        <button className="btn" onClick={createPostHandler}>Publier</button>
      </div>
        )
      }

    </div>
  )
}

export default CreatePost