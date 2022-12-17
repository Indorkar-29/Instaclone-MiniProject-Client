import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper white" >
      <img className="icon" style={{marginLeft:"300px",marginTop:"13px",height:"40px",width:"40px"}}src="img/clone.png" alt="icon" />
      <Link to="/post" className="brand-logo left insta-logo" style={{marginLeft:"5px"}}>Instaclone</Link>
      <ul id="nav-mobile" className="right ">
        <li style={{marginRight:"350px"}}><Link className='a' to="/create"><i className="material-icons">camera_alt</i></Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;
