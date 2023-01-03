import React, { useState } from "react"



function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="navBar">
          <button>{navbarOpen ? "Close" : "Open"}</button>
          <ul>...</ul>
        </nav>
      )

}

export default Navbar;