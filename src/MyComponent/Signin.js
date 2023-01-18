import React from 'react'
import "./signin.css";

function Signin() {
  return (
    <div className='signin'>
        <input type="email" placeholder='Enter email' name='email'/>
        <input type="password" name="pwd" id="pass" placeholder='Enter password'/>
        <button type="submit">Submit</button>
    </div>
  )
}

export default Signin
