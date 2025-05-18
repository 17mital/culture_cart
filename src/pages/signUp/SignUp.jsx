
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import loginImg from "../../assets/img/icons/login-1.png";


import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../../fireBase';


 const auth = getAuth(app);

import "./SignUp.css"
const SignUp = () => {
  const [showPassword, setShowPassword ] = useState(false); 
  const [showPassword1, setShowPassword1 ] = useState(false); 



 const [formFields, setFormFields] = useState({
   email : "",
   password : "",
   confirmPassword : ""

 });              

  const signUp = () => {
    createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      setFormFields({
        email : "",
        password : "",
        confirmPassword : ""
      });       
      // ...
    })      
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  };      


   const handleChangeField = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
   }; 




  return (
    <>
      <div className="sign-up py-3">
        <div className="container-fluid">
          <div className="row"> 
              <nav aria-label="breadcrumb py-3">
              <div className="breadCrumb">
                 <ul className="breadcrumb list list-inline ">
                    <li className="breadcrumb-item list-inline-item breadcrumb-item">
                      <Link to="/"> Home </Link>
                    </li>
                    <li className="breadcrumb-item list-inline-item">
                        Sign Up 
                    </li>
                 </ul>
              </div>
              </nav>  
               </div>
            </div>
        </div> 


        <div className="login-section">
        <div className="container-fluid">
            <div className="row">  

             <div className="col-md-2 single-part "></div>

              <div className="col-md-4 col-sm-6 image-part1 " >
                <div className="image-login">
                  <img src={loginImg} alt="" />
                </div>
              </div>

              {/* Sign up form  start */}
              <div className="col-md-4 col-sm-6 image-part">
                <div className="sign-in-form py-3 ">        
                    <div className="card p-3 shadow">
                            <h4 className="ms-3 mt-2"> Sign Up </h4>
                        <div className="card-body">
                        <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="email"
                                value={formFields.email}
                                onChange={handleChangeField}
                              />
                              <label htmlFor="floatingInput">Email address</label>
                            </div>
                      
                          <div className="pass-box"> 
                            <div className="form-floating ">
                                <input
                                  type={ showPassword === false ? "password" : "text"} className="form-control"
                                  id="floatingPassword"
                                  placeholder="Password"
                                  name="password"
                                  value={formFields.password}
                                  onChange={handleChangeField}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                              </div>
                              <div className="icon-show">
                                <button className="icon" onClick={() => setShowPassword(!showPassword)}>
                                  {
                                    showPassword === false ? <FaRegEyeSlash /> : <FiEye />
                                  }
                                  
                                </button>
                              </div>
                          </div>    


                          <div className="pass-box mt-3"> 
                            <div className="form-floating ">
                                <input
                                  type={ showPassword1 === false ? "password" : "text"} className="form-control"
                                  id="confirmPassword"
                                  placeholder="Password"
                                  name="confirmPassword"
                                  value={formFields.confirmPassword}
                                  onChange={handleChangeField}
                                />
                                <label htmlFor="confirmPassword"> Confirm Password</label>
                              </div>
                              <div className="icon-show">
                                <button className="icon" onClick={() => setShowPassword1(!showPassword1)}>
                                  {
                                    showPassword1 === false ? <FaRegEyeSlash /> : <FiEye />
                                  }
                                  
                                </button>
                              </div>
                          </div>

                              <div className="signIn-button">
                                  <button onClick={signUp} > Sign Up </button> 
                              </div>

                              <div className="not-account mt-3">
                                <p className="text-center">Already have an Acount <Link to="/signIn">  Sign In </Link>  </p>
                              </div>

                       

                        
                        </div>
                    </div>
                </div>
              </div>
              {/* Sign up form  end */}




                <div className="col-md-2 single-part "></div>
             </div>
           </div>
        </div>
    </>
  )
}

export default SignUp
















