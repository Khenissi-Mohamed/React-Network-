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
      <div className='post'>
        <div className="post-header">
          <div className='post-header_left'>
            <img className='post-profilepic'
            src={postData.authorPicture} alt="Post picture"/>
          
            <div>
              <div className="post-author">{postData.author}</div>
              <div className="post-time">{moment(postData.date).format('HH:mm')}</div>
            </div>
            </div>
          <button onClick={() => deletePost(postData.id) } >Supprimer le post</button>
        </div>

        <div className="post-text">
          {postData.text}<br />
        </div>

        <div className="post-picture">
          <img
           src={postData.postPicture} 
           /><br />
        </div>

        <div className="post-footer">

          <span onClick={likePost} className='post-likes post-liked'>
            <span>👍</span>
            <span>{nbLikes}</span>
          </span>
        </div>
      </div>
    )
  }


  export default Post