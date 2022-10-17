import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/action';


const Home = () => {

 const currentUser= useSelector((state)=>state.user);
 const dispatch = useDispatch();
 const navigate = useNavigate();

  const handleauth = ()=>{
if(currentUser){
  dispatch(logoutInitiate());
  navigate("/login");
}
  }

  useEffect(()=>{

  },[])

  return (
    <>
    <h3 className='text-center mx-5 my-5' style={{color:""}}>Welcome To Firebase Login System</h3>
    {/* <Login /> */}
    <div className='' style={{position:"absolute",  top:40, right:40}} >
    <button className='btn btn-danger '  onClick={handleauth}>Logout</button>
    </div>
    
    </>
  )
}

export default Home