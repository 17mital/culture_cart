
import {  useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// icon import 
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdVideoLabel } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";    

import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; 


import SelectDrop from "../selectDropdown/SelectDrop";
import ClickAwayListener from 'react-click-away-listener';  

// images import 
import logo from "../../assets/img/logo2.jpg"
import compare from "../../assets/img/icons/compare.svg"
import heart  from "../../assets/img/icons/heart.svg"
import cart  from "../../assets/img/icons/cart.svg"
import user  from "../../assets/img/icons/user.svg"

import { MyContext } from "../../App";

import Navbar from "./navbar/Navbar";

import "./Header.css";  
const Header = () => {
   const [dropDownOpen, setDropDownOpen ] = useState(false); 
   const [isAccdropDownOpen, setIsAccdropDownOpen ] = useState(false); 
   const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
   const [openSearch, setOpenSearch ] = useState(false); 
   const [isOpenNav, setIsOpenNav ]  = useState(false);
   const searchInput = useRef();

   // handle close
   const handleCloseDrop = () => {
    setDropDownOpen(() => !dropDownOpen)
   }; 

   const [categories, setCategories ] = useState([ 
          "All Categories",
          "Jwellary With Handtouch",
          "Famous Sweets",
          "Spices Of India",
          "Fabrics Of India",
          "Handicrafts Of India",
          "Festivals Vibes",
          "Painting",
          "Vedic Heritage",
          "Fragance Of India",
          "Statwise",     
   ]); 
   

   const context = useContext(MyContext); 
   const navigate = useNavigate(); 

   const signOut = () => {
     context.signOut();
     navigate("/");
   }; 

   useEffect(() => {

   }, [context.cartItems])


   const handleOpenSearch = () => {
      setOpenSearch(true);
      searchInput.current.focus(); 
   };    

   const handleCloseSearch = () => {
      setOpenSearch(false);
      searchInput.current.blur(); 
      searchInput.current.value = ""; 
   };  
   
   const openNavBar = () => {
    setIsOpenNav(true);
   }

   const closeNav = () => {
    setIsOpenNav(false);
    setIsAccdropDownOpen(false); 
   }


  return (
    <>
        <header className="header-middle">
          <div className="container-fluid">
            <div className="row">

              <div className="col-sm-2 header-part1 ">
                 <div className="logo ">
                     <Link to="/"> <img src={logo} style={{width:"120px" , marginLeft:"50px"}} alt="" /> </Link>
                     {
                      windowWidth < 992 && 
                      <div className="ml-auto d-flex align-items-center ">
                           <div className="navBarToogle mr-3" onClick={handleOpenSearch}> <IoIosSearch /></div>
                            <div className="header-cart-wishlist "> 
                              <div className="header-action-icon-2">
                                  <a href='' className="compare-box">
                                      <img className=""  src={cart} />
                                      <span className="pro-count blue"> {context?.cartItems.length} </span>
                                    </a>
                                  <Link to='/cart' className="compare-text"><span className="lable ml-0"></span></Link>
                              </div>        
                            </div>
                            <div className="navBarToogle me-2" onClick={openNavBar}> <GiHamburgerMenu /></div>

                          {
                            context.isLogin === "true" && 
                             <div className="myAccDrop"  onClick={() => setIsAccdropDownOpen(!isAccdropDownOpen)} > <FaRegUser /> </div>
                          }    
                         
                     </div>
                     }
                    
                 </div>
              </div>

            {/* header search start  */}
              <div className="col-sm-5 middle-bar header-part2 ">
                 <div className={`header-search ${openSearch === true ? "open" : ""}`}> 
                 {
                  windowWidth < 992 && <div className="closeSearch" onClick={handleCloseSearch}> <IoClose  /> </div> 
                 }
                    <SelectDrop data ={categories} className="SelectDrop-box"/>
                     <div className="search">
                       <input type="text" placeholder="Search for items..." ref={searchInput}/> <IoIosSearch className="search-icon"/>
                     </div>
                 </div>
              </div>
            {/* header search end   */}

          
             <div className="col-sm-5 cart-wish-account header-part3 res-hide">

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={heart} />
                           <span className="pro-count blue">6 </span>
                        </a>
                      <a href='' className="compare-text"><span className="lable ml-0">Wishlist </span></a>
                   </div>        
                 </div>

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={cart} />
                           <span className="pro-count blue">
                               {
                                context.isLogin === true ?  context?.cartItems.length : 1
                              }
                                
                           </span>
                        </a>
                      <Link to='/cart' className="compare-text"><span className="lable ml-0">Cart</span></Link>
                   </div>        
                 </div>


               {
                context.isLogin === "true" ?  <ClickAwayListener onClickAway={() => setDropDownOpen(false) }>
                <div className="header-cart-wishlist ">                      
                  <div className="header-action-icon-2">
                       <a href='' className="compare-box">
                           <img className=""  src={user} />
                        </a>   
                  
               
                      <a href='#' className="compare-text" onClick={() => setDropDownOpen(!dropDownOpen)} ><span className="lable ml-0" onClick={handleCloseDrop}> Account </span></a>    
                      
                   </div>
                   {
                    
                    dropDownOpen && <ul className="dropdown-menu-abc shadow">
                    <li className="drop-down-hover">  <button > <Link>  <FiUser />  My Account </Link> </button></li>
                    <li className="drop-down-hover">  <button> <a href="https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx"> <CiLocationOn /> Order Tracking  </a>  </button></li>
                    <li className="drop-down-hover">  <button> <Link> <MdVideoLabel /> My Voucher  </Link> </button></li>
                    <li className="drop-down-hover">  <button> <Link> <CiHeart /> My Wishlist </Link>  </button></li>
                    <li className="drop-down-hover">  <button onClick={signOut}> <Link> <LuLogOut /> Sign out </Link>  </button>
                    </li>
                  </ul>
                   }
                 </div>
                </ ClickAwayListener >  

                 : <div className="header-cart-wishlist "> 
                <button className="sign-in-btn"> <Link to="/signIn">  Sign In </Link> </button>
             </div>
               }    

              
             </div>
            </div>
          </div>
        </header>

        <Navbar openNav = {isOpenNav} closeNav={closeNav}/>  

        {
      
           isAccdropDownOpen  && 
           <> 
           <div className="navbarOverlay" onClick={closeNav}></div>
              <ul className="dropdown-menu-abc shadow dropDownMenuAcc">
              <li className="drop-down-hover">  <button > <Link> <FiUser />  My Account </Link> </button></li>
              <li className="drop-down-hover">  <button > <Link> <img src={compare} />  Compare </Link> </button></li>
              <li className="drop-down-hover">  <button > <Link>  <img className=""  src={heart} /> Wishlist </Link> </button></li>
              <li className="drop-down-hover">  <button> <Link> <CiLocationOn />  Order Tracking </Link> </button></li>
              <li className="drop-down-hover">  <button>  <Link> <MdVideoLabel />  My Voucher </Link> </button></li>
              <li className="drop-down-hover">  <button>  <Link> <CiHeart />  My Wishlist </Link> </button></li>
              <li className="drop-down-hover">  <button>  <Link> <CiSettings /> Setting </Link> </button></li>
              <li className="drop-down-hover" onClick={closeNav}> 
                  <button onClick={signOut}> <Link> <LuLogOut /> Sign out   </Link>  </button>
              </li>
              </ul>
            </>
    }  
    
        
  

    </>      
  )
}

export default Header; 













