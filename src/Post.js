
import { useState } from 'react'

function Post({postData, deletePost}) {

  const [nbLikes, setNbLikes] = useState(postData.likes)
  const [isLiked, setisLiked] = useState(false)
  
  const likePost = () => {
    const increment = isLiked ? -1 : 1
    setNbLikes(nbLikes + increment )
    setisLiked(!isLiked)
  }

    return (
      <div>
        {postData.author}<br />
        {postData.text}<br />
        {nbLikes} likes<br />
        <button onClick={likePost}> {isLiked ? "Vous aimez ce post" : "jaime"} </button>
        <button onClick={() => deletePost(postData.id) } >Supprimer le post</button>
      </div>
    )
  }


  export default Post