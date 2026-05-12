import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <div id="navbar">
        <div className="container">
            <div className="wrap">
                        <div className="nav-area">
                            <div className="logo">
                            <img src="../../public/logo.png" alt="logo" />
                            </div>
                        <nav className='nav'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Sermon</a></li>
                                <li><a href="#">Blog</a></li>
                        </nav>
                        </div>
                <div className="nav-btn ">
                    <button className='primary-btn'>Contact Us</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
export default Navbar