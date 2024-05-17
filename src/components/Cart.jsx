import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookListp from './BookList';

const Bookp = (props) =>{
    // console.log(props.setCart)
    console.log("book")
    console.log(props)
  
    const addToCart = (id) => {
      console.log(id)
  
      // props.setCart((oldArray) => [...oldArray,bookName]) 
  
      let arr = [...props.bookState]
      arr.forEach((item) => {
        if(item.id === id) item.quantity ++
      })
  
      props.setBookState(arr)
  
      // console.log(id)
    }
    return(
      <article className='content'>
        {<img src = {props.image}></img>}
        <h2>{props.bookname}</h2>
        <p className='authnm'>{props.author}</p>
        <p>{props.price}</p>
        <label>Quantity : </label><input type="number" value={props.quantity} placeholder="Enter Qty"/><br/>
  
        <button className='btn' type="button" onClick={() => addToCart(props.id)}>Add to Cart</button>
      </article>
    )
    }

const Cart = (props) =>{
    // console.log(props.cart)

    let cart = props.bookState.filter((book) =>  book.quantity > 0) // filter function 
    return(
      <div className='cart'>
        <h1 className='cart_heading'>Below is Your Cart</h1>
        {
          // props.cart.map((b) => {
          //   return (
          //   <div>
          //     <p className='cart_details'>{b}</p> 
          //   </div>
          //   );
          // })
        }
        {
        cart.map((b) => {
          return(
            <Bookp bookname={b.name} author={b.author} image = {b.image} price={b.price} key={b.id} setCart={props.setCart}/> 
          )
        })
      }
      </div>
    )
  }

export default Cart;