import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "./PathConstants";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={PathConstants.HOME}>Home</Link></li>
        <li><Link to={PathConstants.ANNOUNCEMENTS}>Announcements</Link></li>
        <li><Link to={PathConstants.BANKING}>Banking</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar