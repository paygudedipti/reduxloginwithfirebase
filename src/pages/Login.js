import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { googleSIgnInInitiate, loginInitiate } from '../redux/action';


const Login = () => {

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const { email, password } = state;

  const {currentUser} = useSelector((state)=>state.user);

  const navigate = useNavigate();
  
  useEffect(()=>{
    if(currentUser){
      navigate("/");
    }
  },[currentUser,navigate]);
  
  const dispatch = useDispatch();

 

  const handleGoggleSignIn = () => {
    dispatch(googleSIgnInInitiate());
   }

  const handleFacebookSignIn = () => { }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      return;
    }
    dispatch(loginInitiate(email,password));
    setState({email:"",password:""})
  };
  
  const handleChange = (e) => {

    let {name ,value} = e.target;
    setState({...state, [name]:value});
   };

  return (
    <>
      <div className='container'>

        <div className='row d-flex justify-content-center mt-5' id='loginform'>

          <div className='card' style={{ width: "30rem", height: "27rem", paddingTop: "2rem", paddingBottom: "5rem", paddingLeft: "2rem", paddingRight: "2rem", backgroundColor: "#E2E2E2" }}  >
            <h3 className='text-center pb-3'>Login</h3>

            <div className='row'>
              <div className="col-xs-6 col-md-6"><img src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png" alt='noimg' height='45' onClick={handleGoggleSignIn} /></div>
              <div className="col-xs-6 col-md-6"><img src="https://www.pngall.com/wp-content/uploads/5/Login-Button-PNG-Photo.png" alt='noimg' height='50' onClick={handleFacebookSignIn} /></div>

            </div>


            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="inputEmail" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} value={email} required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group pb-3">
                <label >Password</label>
                <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" onChange={handleChange} value={password} required />
              </div>
              {/* <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" >Check me out</label>
  </div> */}
              <button type="submit" className="btn btn-primary">Login</button>
              <p className='pt-3'>Dont have An Account ? &nbsp;
                <Link to="/signup" >SignUp</Link>
              </p>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login