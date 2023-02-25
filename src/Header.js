import PropTypes from 'prop-types'
import { useState } from 'react'

function Header() {

  // const [title, setTitle] = useState("react network")


  const title = "react network"

    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }



  export default Header