import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { handleFormValidations } from '../utils/Validations'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const Emailref = useRef(null);
  const passwordRef = useRef(null);
  // const [Username, SetUsername] = useState('')
  const dispatch = useDispatch();
  const userna = useSelector((state) => state.user.userName)
  const navigate = useNavigate()

  const [SignIn,setSignIn] = useState(true)
  const [errorMessages,seterrorMessages] = useState('')
  const handleClick = () => {
      setSignIn(!SignIn)
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
     const message = handleFormValidations(Emailref.current.value,passwordRef.current.value)
     seterrorMessages(message);

     if(message) return;

     if(!SignIn) {
      createUserWithEmailAndPassword(auth, Emailref.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        
})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

     }
     else{

      signInWithEmailAndPassword(auth,Emailref.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/header");
        console.log("This after navigation to header page ")
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      
     }




     
  }

  
  return (
    
    <div className='relative'>
        <Header />
        <div>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg'/>
        </div>
         
        <div className="bg-black bg-opacity-60 w-4/12 h-auto absolute top-36 ml-96 px-10 py-10 rounded-sm ">
        <form className='space-y-5'>
          <h1 className='text-white font-bold'>{SignIn ? "SignIn":"Signup"}</h1>
          {!SignIn && (
            <input className='px-3 py-2 w-full rounded-sm' type='text' placeholder='Enter your name' />
          )}
          <p className='text-red-800 font-bold'>{errorMessages}</p>
          <input ref={Emailref} className='px-3 py-2 w-full rounded-sm' type='text' placeholder='Enter you Email'/><br></br>
          <input ref={passwordRef} className='px-3 py-2 w-full rounded-sm' type='text' placeholder='Enter your password'/> <br></br>
          <button onClick={handleButtonClick} className='px-3 py-2 bg-red-600 w-full rounded-sm'>{SignIn ? "SignIn":"Signup"}</button>
          <p className='text-white cursor-pointer' onClick={handleClick}>New to Netflix? Sign up now</p>
        </form>
        </div>
    </div>

  )
}

export default Login
