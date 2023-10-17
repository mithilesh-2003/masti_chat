import React ,{useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom'

function Login() {
  const [email, setEmail]=useState('')
  const [password ,setPassword] =useState('')
  const [error ,setError]=useState('')

  // use navigate
  const navigate= useNavigate('');
  const handelLogin=()=>{
    if(email==='admin' && password==='12345'){
      navigate('/Home')
    }
    else{
      setError('envalid route')
    }
  }
  return (
    <div className='main'>
        <div className='main1'>
          <img className='img50' src='img-23.png'alt='fgghj'/>
      <div className='mainb'>
        <h1>Signin</h1>
       
      <div>
        <input type='email'placeholder='Email Address'value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
        <div>
          <input type='password'placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {error &&<p style={{color:"red"}}>some error occured</p>}
        </div>
        <div>
          <input style={{marginLeft:"-300px"}} type='radio'/>
          <p style={{marginTop:"-35px"}}>i aggree to the terms and service </p> 
        </div>
        <button onClick={handelLogin} style={{height:"40px",width:"300px",borderRadius:"30px",marginTop:"20px",border:"none",background:"#ffa637"}}>Login</button>
        <p>Alerady a member ?<Link to="/Forgetpassword">Forgetpassword</Link></p>
      </div>
      </div>




      <div className='main2'>
        <img className='img22' src='img-22.jpg' alt='hhhh'/> 
      </div>
      <div className='min'>
      <Link to="/Home">
        <button style={{height:"35px",width:"100px",marginLeft:"-200px",color:"#ffa637"}}>Home</button>&nbsp;
      </Link>

      <Link to="/Signup">
        <button style={{height:"35px",width:"100px",color:"#ffa637"}}>Signup</button>
      </Link>
      <h1 style={{marginLeft:"-200px",color:"white",fontSize:"50px"}}>WELCOME TO<span style={{color:"#ffa637"}}> ODDO</span></h1>
      </div>
    </div>
  )
}

export default Login
