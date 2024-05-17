import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import './index.js'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function Navbar(){
  return(
    <div class="navbar">
      <div class="navdiv"><marquee>Get 70% Off</marquee>
      </div>
    </div>

            
        
  )
}


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

// <Bookp bookname={b.name} author={b.author} image = {b.image} price={b.price} key={b.id} setCart={props.setCart}/> 

function Footer(){
  return(
    <footer>
      <div id="css">
        <p>Developed By : Kartik Lakhotiya</p>
        <a href="mailto:hege@example.com" className='foot'>kartiklakhotiya19@gmail.com</a>
      </div>
    </footer>
  )
}

function About(){
  return(
      <h1 className='about'>This is Our About Us page</h1>
    
  )
}

function Registration(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isSuccess,setIsSuccess] = useState(false);
  const handleInputChange = (e) => {
    const {id,value} = e.target;
    if(id === 'firstName'){
      setFirstName(value);
    }
    if(id === 'lastName'){
      setLastName(value);
    }
    if(id === 'email'){
      setEmail(value);
    }
    if(id === 'password'){
      setPassword(value);
    }
    if(id === 'confirmPassword'){
      setConfirmPassword(value);
    }
    if(id === 'address'){
      setAddress(value);
    }
    
  }

  const handleSubmit = async (event) =>{
      event.preventDefault();

      const data = {
        'firstName' : firstName,
        'lastName': lastName,
        'email' : email,
        'password': password
      }

      // Code if you are using index.js (Display form data in Terminal)
      const response = await fetch('http://localhost:4001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response)

      if (response.ok) {
        console.log('Form submitted successfully');
        
      } else {
        console.log('Form submission failed');
        
      }


      
      // Code if you are using sql.js file (insert operation)
      const response1 = await fetch('http://localhost:4002/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response1)

      if (response1.ok) {
        console.log('Form submitted successfully');
        
      } else {
        console.log('Form submission failed');
        
      }


      console.log(firstName,lastName,email,address)
      console.log(address)

      //all
      if(firstName === ""){
        alert("First Name Cannot be Empty");
        return
      }
      if(lastName === ""){
        alert("Last Name Cannot be Empty");
        return
      }
      if(email === ""){
        alert("Email Cannot be Empty");
        return
      }
      if(password === ""){
        alert("Password Cannot be Empty");
        return
      }
      if(confirmPassword === ""){
        alert("Confirm Password Cannot be Empty");
        return
      }
      if(address === ""){
        alert("Please fill the feedback textbox");
        return
      }

      //email
      var atIdx = email.indexOf("@")
      var dotIdx = email.indexOf(".")
      if(atIdx > 0 && dotIdx > atIdx + 1 && email.length > dotIdx){
          console.log('correct')
      }
      else{
          alert("Invalid Email")
          return
      }

      //password
      var upper = /[A-Z]/.test(password)
      var lower = /[a-z]/.test(password)
      var number = /[0-9]/.test(password)
      var special = /[!@#$%^&*()_+=-{}.,;'"]/.test(password)
      var len = password.length
      if(upper && lower && number && special && len>=8){
        console.log("Correct")
      }
      else{
        alert("Invalid Password.")
        return
      }

      if(confirmPassword === password){
        console.log("ok")
      }
      else{
        alert("Password Should be same.")
      }

      // check boxes
      let count = 0
      let data1 = event.target.issues;
      console.log(data1)
      console.log(data1[0].checked)
      console.log(data1[1].checked)

      for(let i = 0 ; i<data1.length;i++){
        if(data1[i].checked){
          count ++;
        }
      }
      if(count<2){
        alert("Select At Least 2 Electives.")
        return
      }
      
      setIsSuccess(true)

  }


  return(
    <form onSubmit={handleSubmit}>
      <div className='main'>
          <h2>Feedback Form</h2>
          <div>
            <label>Enter Your First Name : </label>
            <input type='text' id="firstName" name='firstName' onChange={handleInputChange}/><br/><br/>
            <label>Enter Your Last Name : </label>
            <input type='text' id="lastName" name='lastName'onChange={handleInputChange}/><br/><br/>
            <label>Enter Your EMAIL ID : </label>
            <input type='text' id="email" name='email'onChange={handleInputChange}/><br/><br/>
            <label>Enter Your Password : </label>
            <input type='password' id="password" name='password'onChange={handleInputChange}/> <br/><br/>
            <label>Enter Your Confirm Password : </label>
            <input type='password' id="confirmPassword" name='confirmPassword'onChange={handleInputChange}/>  
          </div>  
          <p><b>Select Your Book Type:</b></p>
          <div>
            <input type="radio" id="excellent" name="rating" value="excellent" defaultChecked/>
            <label>Horror</label>
            <br/>
            <input type="radio" id="good" name="rating" value="good"/>
            <label>Action</label>
            <br/>
            <input type="radio" id="average" name="rating" value="average"/>
            <label>Suspense</label>
            <br/>
            <input type="radio" id="poor" name="rating" value="poor"/>
            <label>Thriller</label>
          </div>
          
          <p><b>Select Authors (Minimum 2):</b></p>
          <div>
            <input type="checkbox" id="adbms" name="issues" value="buggy"/>
            <label>J.K Rowling</label>
            <br/>
            <input type="checkbox" id="hci" name="issues" value="unclear"/>
            <label>Helen Keller</label>
            <br/>
            <input type="checkbox" id="iot" name="issues" value="slow"/>
            <label>Chetan Bhagat</label>
          </div>
          
          <p><b>Leave your Course feedback (optional):</b></p>
          <textarea id="address" name="address" rows="3" placeholder="Write your feedback here..." onChange={handleInputChange}></textarea>
          
          <button type="submit" className='submit'>Submit</button>
          {
            isSuccess && <p>Form Submitted</p>
          }
          </div>
          </form>

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

function App() {
  const books = [
    {
      id : 1,
      name:"Fourth Wing",
      author:"Rebecca Yaros",
      image:"book.jpg",
      price: "$499",
      quantity : 0
    },
    {
      id : 2,
      name:"A Tale of 2 Cities",
      author:"Charles Dickens",
      image:"book1.jpg",
      price:"$599",
      quantity : 2
    },
    {
      id : 3,
      name:"Harry Potter",
      author:"JK Rowling",
      image:"book2.jpeg",
      price:"$699",
      quantity : 3
    },
    {
      id : 4,
      name:"Lord of the Rings",
      author:"J.R.R Toklien",
      image:"book3.jpg",
      price:"$399",
      quantity : 4
    },
    {
      id : 5,
      name:"Obssesed",
      author:"James Patternson",
      image:"book4.jpg",
      price:"$649",
      quantity : 0
    },
    {
      id : 6,
      name:"It starts with us",
      author:"Collen Hoover",
      image:"book5.jpg",
      price:"$749",
      quantity : 0
    }
  ];
  const [bookState, setBookState] = useState(books);
  const [cart,setCart] = useState([]);
  return(
    <BrowserRouter>
    <div>
      
      <Sidebar/>
      <Navbar/>
      <Routes>
        <Route path='/contact-us' exact element={<Registration/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/' exact element={<BookListp bookState={bookState} setBookState={setBookState}/> }/>
        <Route path='/cart' exact element={<Cart bookState={bookState} setBookState={setBookState}/>}/>
      </Routes>
     
      
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;

// cart={cart} setCart={setCart}
// cart={cart} setCart={setCart}
