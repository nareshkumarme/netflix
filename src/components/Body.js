import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Header from './Header';

const Body = () => {
   const appRouter = createBrowserRouter([
    {
       path:"/",
       element:<Login />
    },
    {
      path:"/header",
      element: <Header />
      
    }
])

// const dispatch = useDispatch();
// const user = useSelector((state) => state.user.userName);
// const navigate = useNavigate();


// useEffect(()=> {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log(user)
//       const {email} = user;
//       dispatch(addUser(email));
//       navigate("/browser");
      
//     } else {
//       dispatch(removeUser())
//       navigate("/")
//     }
//   });
// },[])

const AuthHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userName);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email } = user;
        dispatch(addUser(email));
        navigate("/browser");  // Navigate to the browser page
      } else {
        dispatch(removeUser());
        navigate("/");  // Navigate to the login page
      }
    });

    return () => unsubscribe();  // Cleanup the subscription
  }, [dispatch, navigate]);

  return null;
};

  return (
    <div>
      <RouterProvider router={appRouter}>
           <AuthHandler />
      </RouterProvider>
      

    </div>
  )
}

export default Body
