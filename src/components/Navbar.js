import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
    const mystyle={
        display:"absolute",
        top:"6px",
        backgroundColor:"red",
        color:"white",
        zIndex:"1"
    }
    const login=()=>{
        return (
            <>
                <div style={mystyle}>
                    Login here
                </div>
            </>
        )
        
    }
  return (

    <>
        <nav className="navbar bg-dark navbar-dark fixed-top navbar-expand-lg">
            <div className="container-fluid">
            <div className="dropdown">
                <button className="dropbtn">==</button>
                <div className="dropdown-content">
                    <a href="">Channel</a>
                    <a href="">Language</a>
                    <a href="">Ganres</a>
                </div>
            </div>
            <a className="navbar-brand" href="#"><img src="../images/logo.svg" width="55" height="45" alt=""/></a>
            <a className="navbar-brand" href="#">hotstar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/tv">TV</Link>
                </li> */}
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Movies">Movies</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Disney+</Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Kids">KIDS</Link>
                </li> */}
                
                
                
                
            </ul>
            <form className="d-flex" role="search">
                <input className="search-bar" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btnn" type="submit">SUBSCRIBE</button>
                <button className="button" onClick={login} type="submit">LOGIN</button>
            </form>
            </div>
            </div>
        </nav>
     </>
  )
}
