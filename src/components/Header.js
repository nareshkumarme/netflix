import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const userName = useSelector((state) => state.user.userName)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/");
      }).catch((error) => {
      navigate("/error");
    });
  };


  return (
    <div className='absolute z-10 w-screen flex justify-between bg-gradient-to-b from-black/30 via-gray-600/10'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix Logo'/>
      {userName && (
        <button className='text-white rounded w-24 h-8 bg-red-600' onClick={handleSignOut}>
          Sign out
        </button>
      )}
      {console.log("This is eaxct time of rendering")}
    </div>
  );
};

export default Header;
