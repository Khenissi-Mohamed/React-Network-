import { useState } from 'react'
import moment from 'moment'

function Post({postData, deletePost, likePost}) {


  const [showMenu, setShowMenu] = useState(false)
  

  const toggleMenu = () => {
    setShowMenu(!showMenu)
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

            <div onClick={toggleMenu} className="post-menu">
              ...
              <div className={ showMenu ? "post-popup" : "post-popup hidden"}
                 onClick={() => deletePost(postData.id) }
              >
                Supprimer
              </div>
            </div>

          {/* <button >Supprimer le post</button> */}
        </div>

        <div className="post-text">
          {postData.text}
        </div>

        <div className="post-picture">
          <img
           src={postData.postPicture} 
           />
        </div>

        <div className="post-footer">

          <span onClick={() => likePost(postData.id)} className={ !postData.isLiked ? 'post-likes' : 'post-likes liked'}>
            <span className='post-thumb'>👍</span>
            <span>{postData.likes}</span>
          </span>
        </div>
      </div>
    )
  }


  export default Post