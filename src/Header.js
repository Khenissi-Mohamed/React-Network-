import PropTypes from 'prop-types'
import { useState } from 'react'

function Header() {

  const [title, setTitle] = useState("react network")


  // let title = "react network"

  const changeTitle = () => {
    setTitle("mon nouveau titre")
    console.log("title", title);
  }


    return (
      <div>
        <h1>{title}</h1>
        <button onClick={changeTitle}>Ciquez ici</button>
      </div>
    )
  }



  export default Header