import React from 'react'
import { Link } from 'react-router-dom'

function Forgetpassword() {
  return (
    <div className='main'>
        <div className='main1'>
          <img className='img50' src='img-23.png'/>
      <div className='mainb'>
        <h1>Forgetpassword</h1>
       
      <div>
        <input type='email'placeholder='Email Address'/>
      </div>
        <div>
          <input style={{marginLeft:"-300px"}} type='radio'/>
          <p style={{marginTop:"-35px"}}>i aggree to the terms and service </p> 
        </div>
        <button style={{height:"40px",width:"300px",borderRadius:"30px",marginTop:"20px",border:"none",background:"#ffa637"}}>get otp</button>
        <p>Alerady a member ?<Link to="/Forgetpassword">Forgetpassword</Link></p>
      </div>
      </div>




      <div className='main2'>
        <img className='img22' src='img-22.jpg'/> 
      </div>
      <div className='min'>
      <Link to="/">
        <button style={{height:"35px",width:"100px",marginLeft:"-200px",color:"#ffa637"}}>Login</button>&nbsp;
      </Link>

      <Link to="/Signup">
        <button style={{height:"35px",width:"100px",color:"#ffa637"}}>Signup</button>
      </Link>
      <h1 style={{marginLeft:"-200px",color:"white",fontSize:"50px"}}>WELCOME TO<span style={{color:"#ffa637"}}> ODDO</span></h1>
      </div>
    </div>
  )
}

export default Forgetpassword;
