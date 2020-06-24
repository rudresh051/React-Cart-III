import React from "react"
import {Link} from "react-router-dom"


function Navbar(){
    return(
        <div>
            <Link to ="/" style={{padding:10}}>Home</Link>
            <Link to="/about" style={{padding:10}}>About</Link>
            <Link to="/login" style={{padding:10}}>Login</Link>
            <Link to="/cart" style={{padding:10}}>Cart</Link>
        </div>
    )
}

export default Navbar