import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
  const BookListp=(props)=>{
    console.log(props)
    return(
      <section className='booklist'>
        {
          props.bookState.map((b) => {
            return(
              <Bookp bookState={props.bookState} bookname={b.name} author={b.author} quantity={b.quantity} image = {b.image} price={b.price} id={b.id} key={b.id}  setBookState={props.setBookState}/> 
            )
          })
        }
  
  
        
      </section>
    )
  }

export default BookListp;