
import { createContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';

import axios from 'axios';
import router from './routes/router';


const MyContext = createContext();

import './App.css'
function App() {

    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
   />

  const [cartItems, setCartItems] = useState([]);
  const [isLogin , setIsLogin] = useState();
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth); 

  const [openFilters, setOpenFilters ] = useState(false);  

  useEffect(() => {
    getCartData(`http://localhost:5050/cartItems`); 

    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login); 
  }, []); 
  
  
  const getCartData = async(url) => {
    try {
     await axios.get(url).then((response) => {
       setCartItems(response.data)
     })
    } catch (error) {
      console.log(error.message);
    }
   };

  // add to cart 
  const addToCart = async (item) => {
    item.quantity = 1;
   
    try {
      await axios.post("http://localhost:5050/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
      })
    } catch (error) {
      console.log(error.message)
    }   

  };      


  // remove cart 
  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr)
  }

  // empty cart 
  const emptyCart = () => {
    setCartItems([])
  }

  // sign in 
  const signIn = () => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login); 
  }

// sign out 
 const signOut = () => {
  localStorage.removeItem("isLogin"); 
  setIsLogin(false); 
 }

 const openFilterShop = () => {
  setOpenFilters(!openFilters)
 }; 

  const value = {
     cartItems,
     addToCart,
     removeItemsFromCart,
     emptyCart,
     isLogin,
     signOut,
     signIn, 
     windowWidth, 
     openFilters, 
     openFilterShop 
  }
   



  return (
    <>
     <MyContext.Provider value={value}> 
          <RouterProvider router={router} /> 
      </MyContext.Provider>
    </> 
  )
}

export default App; 

export { MyContext }; 


