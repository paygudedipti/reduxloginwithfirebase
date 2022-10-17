
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import UserRoute from './componets/UserRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {auth } from './firebase';
import { setUser } from './redux/action';


function App() {

const dispatch = useDispatch();

useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    dispatch(setUser(authUser));
  }else{
    dispatch(setUser(null));
  }
})
},[dispatch]);

  return (
    <>
    
    <Router>
 
      <Routes>
       
        <Route exact path="/" element={<Home/>} />       
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
