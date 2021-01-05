import React from "react"
import { Link } from "react-router-dom"

function Header () {
    return (
        <header className="navbar-brand justify-content-left kw-bkgd">
        <Link to="/">
          <h1>streak / shade</h1>
        </Link> 
      </header>
    )
}

export default Header