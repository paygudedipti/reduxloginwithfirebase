import * as types from "./actionType";
import {auth, googleAuthProvider} from "../firebase";


// for register code
const registerStart = () =>({
    type: types.REGISTER_START,
});

const registerSUCCES = (user) =>({
    type: types.REGISTER_SUCCES,
    payload:user
});

const registerFAIL = (error) =>({
    type: types.REGISTER_FAIL,
    payload:error
});

// for login code

const loginStart = () =>({
    type: types.LOGIN_START,
});

const loginSuccess = (user) =>({
    type: types.LOGIN_SUCCES,
    payload:user
});

const loginFail = (error) =>({
    type: types.LOGIN_FAIL,
    payload:error
});

// for Logout code

const logoutStart = () =>({
    type: types.LOGOUT_START,
});

const logoutSuccess = () =>({
    type: types.LOGOUT_SUCCES,
  
});

const logoutFail = (error) =>({
    type: types.LOGIN_FAIL,
    payload:error
});


// set user
export const setUser =(user)=>({
    type:types.SET_USER,
    payload:user
});


// GOOGLE SIGN IN START 

const googleSignInStart = () =>({
    type: types.GOOGLE_SIGIN_START,
});

const googleSignInSuccess = (user) =>({
    type: types.GOOGLE_SIGIN_SUCCES,
    payload:user
});

const googleSignInFail = (error) =>({
    type: types.GOOGLE_SIGIN_FAIL,
    payload:error
});


// for register code
export const registerInitiate = (name,email,password)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                name
            })
            dispatch(registerSUCCES(user))
        }).catch((error)=>{dispatch(registerFAIL(error.message))})
    };
};

// for Login code
export const loginInitiate = (email,password)=>{
    return function(dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            
            dispatch(loginSuccess(user))
        }).catch((error)=>{dispatch(loginFail(error.message))})
    };
};

// for LOGOUT code
export const logoutInitiate = ()=>{
    return function(dispatch){
        dispatch(logoutStart());
        auth.signOut().then((resp)=>{            
            dispatch(logoutSuccess())
        }).catch((error)=>{dispatch(logoutFail(error.message))})
    };
};


// GOOGLE SIGN IN INITIATE CODE

// for Login code
export const googleSIgnInInitiate = ()=>{
    return function(dispatch){
        dispatch(googleSignInStart());
        auth.signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            
            dispatch(googleSignInSuccess(user))
        }).catch((error)=>{dispatch(googleSignInFail(error.message))})
    };
};

