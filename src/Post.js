import PropTypes from 'prop-types'
import { useState } from 'react'

function Post({text, author, likes, postData}) {

  const [nbLikes, setNbLikes] = useState(postData.likes)

  const addLikesHandler = () => {
    setNbLikes(nbLikes +1 )
  }

    return (
      <div>
        {postData.author}<br />
        {postData.text}<br />
        {nbLikes} likes<br />
        <button onClick={addLikesHandler}>J'aime</button>
      </div>
    )
  }

Post.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
}

  export default Post