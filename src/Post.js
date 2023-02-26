import { useState } from 'react'
import moment from 'moment'

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
        <img src={postData.authorPicture} /><br />
        {postData.author}<br />
        {moment(postData.date).format('HH:mm')} <br />
        {postData.text}<br />
        <img src={postData.postPicture} /><br />
        {nbLikes} likes<br />
        <button onClick={likePost}> {isLiked ? "Vous aimez ce post" : "jaime"} </button>
        <button onClick={() => deletePost(postData.id) } >Supprimer le post</button>
      </div>
    )
  }


  export default Post