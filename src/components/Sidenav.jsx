import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Sidebar(){

    const items = [
      {text: "About"},
      {text: "Sign In"},
      {text: "Sign Out"},
    ]
  
    return (
      <div className='sidebar'>
        <Link to="/">
          <img src='logo.png' className='logo'></img>
          {/* <p className='title'>Book Store</p> */}
        </Link>
        
        <div>
          {/* {
            items.map((i, idx) => {
              return (
                <div>
                <button className='link'>{i.text}</button>
                </div>
              )
            })
          } */}
          <Link className='xyz' to="/"><button className="link" >Home</button></Link>
          <Link className="xyz"to="/about"><button className="link" >About Us</button></Link>
          <button className="link" >Sign In</button>
          <button className="link" >Sign Out</button>
          <Link className="xyz"to="/contact-us"><button className="link" >Contact Us</button></Link>
          <Link className='xyz' to="/cart"><button className="link" >Show Cart</button></Link>
  
          
        </div>
      </div>
    )
  }

export default Sidebar