
import { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

// import images 
import facebookImage from "../../assets/img/icons/facebook.png";
import googleImage from "../../assets/img/icons/google.png";
import loginImg from "../../assets/img/icons/login-1.png";


import { MyContext } from "../../App";

// firebase sign in 
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../../fireBase';

const googleProvider = new GoogleAuthProvider();


const auth = getAuth(app);




import "./SignIn.css";
const SignIn = () => {
   const [showPassword, setShowPassword ] = useState(false); 
   const [formFields, setFormFields] = useState({
    email : "",
    password : "",
  }); 


  const handleChangeFieldData = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
   }; 

   const context = useContext(MyContext); 
   const navigate = useNavigate(); 

   // sign in email & password 
  const signIn = () => {
    signInWithEmailAndPassword(auth, formFields.email, formFields.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setFormFields({
            email : "",
            password : "",
          });


        localStorage.setItem("isLogin", true); 
        context.signIn(); 

        navigate("/")
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  };    
  
  
//sign in with google 
const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
 
    const user = result.user;

    localStorage.setItem("isLogin", true); 
    context.signIn(); 

    navigate("/")

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);

  });
}; 







  return (
    <>
       <div className="sign-up py-3 ">
        <div className="container-fluid">
          <div className="row"> 
              <nav aria-label="breadcrumb py-3">
          <div className="breadCrumb">
              <ul className="breadcrumb list list-inline ">
                    <li className="breadcrumb-item list-inline-item breadcrumb-item">
                      <Link to="/"> Home </Link>
                    </li>
                    <li className="breadcrumb-item list-inline-item">
                       Sign In 
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

             <div className="col-md-2 single-part"></div>
              <div className="col-md-4 col-sm-6 image-part1 ">
                <div className="image-login">
                     <img src={loginImg} alt="" />
                 </div>
              </div>

             {/* Sign up form  start */}
              <div className="col-md-4 col-sm-6 image-part ">
                <div className="sign-in-form py-3 ">
                    <div className="card p-3 shadow">    
                            <h4 className="ms-3 mt-2"> Sign In </h4>
                        <div className="card-body">
                        <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="email"
                                value={formFields.email}
                                onChange={handleChangeFieldData}
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
                                   onChange={handleChangeFieldData}
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

                              <div className="signIn-button">
                                  <button onClick={signIn}> Sign In </button> 
                              </div>
                              <div className="or text-center p-2"> <p> OR  </p></div>
                              <div className="google-btn">
                                <button onClick={signInWithGoogle}> <img src={googleImage} alt="" /> Sign In With Google </button>
                              </div>
                              
                              <div className="not-account mt-3">
                                <p className="text-center">  Not have an Acount <Link to="/signUp">  Sign Up </Link>  </p>
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

export default SignIn; 


















