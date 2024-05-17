import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

export default Registration