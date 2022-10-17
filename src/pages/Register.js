
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link ,useNavigate  } from 'react-router-dom';
import { registerInitiate } from '../redux/action';

const Register = () => {
  
  const [state, setState] = useState({
    name:"",
    email:"",
    password:"",
    cpass:""
});
const {currentUser} = useSelector((state)=>state.user);

const navigate = useNavigate();

useEffect(()=>{
  if(currentUser){
    navigate("/");
  }
},[currentUser,navigate]);

const dispatch = useDispatch();

const {name,email,password,cpass} = state;


const handleSubmit = (e) =>{
e.preventDefault();
if(password!==cpass){
  return;
}
dispatch(registerInitiate(name,email,password));
setState({name:"",email:"",password:"",cpass:""})
};

const handleChange = (e) => {
  let {name,value} = e.target;
  setState({...state,[name]:value})
}

  return (
    <>
    <div className='container'>
        
<div className='row d-flex justify-content-center mt-5' id='registerform'>
    <div className='card' style={{width: "30rem" ,height: "30rem", paddingTop: "2rem", paddingBottom:"5rem", paddingLeft:"2rem", paddingRight : "2rem", backgroundColor:"#E2E2E2"}} >

<form onSubmit={handleSubmit}>
 <h3 className='text-center'>Sign Up</h3>
  <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" name='name' id="inputname1" placeholder="Name" onChange={handleChange} value={name} required />
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" name='email' id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} value={email} required />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group pb-3">
    <label >Password</label>
    <input type="password" className="form-control" name='password' id="inputPassword1" placeholder="Password" onChange={handleChange} value={password} required />
  </div>
  <div className="form-group pb-3">
    <label >Confirm Password</label>
    <input type="password" className="form-control" name='cpass' id="inputPassword2" placeholder="Confirm Password" onChange={handleChange} value={cpass} required />
  </div>
  {/* <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary ">Sign Up</button>
  <p className='pt-3'>You Have An Account ? <Link to="/login" >Login</Link>    </p>
</form>
</div>
   </div>
   </div>

    </>
  )
}

export default Register