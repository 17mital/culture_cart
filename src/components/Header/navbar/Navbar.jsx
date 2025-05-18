import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import icons 
import { MdSlowMotionVideo } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa"; 

// import image
import sreen from "../../../assets/img/thumbnail/screen.png"
import ai from "../../../assets/img/logo2.jpg"


import { MyContext } from "../../../App";
import "./Navbar.css"   

const Navbar = (props) => {
  const [productData, setProductData ] = useState([]);
  const [isOpenNav, setIsOpenNav ]  = useState(false);
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const context = useContext(MyContext); 


  useEffect(() => {
     getData(`http://localhost:5050/productData`);
  }, []);



  const getData = async(url) => {
    try {
       await axios.get(url).then((response) => {
        setProductData(response.data);

       })
    } catch (error) {
      console.log(error.message);
    }
  };


  const [nestOpen, setNestOpen] = useState(false); 
  const [nestOpenbtn, setNestOpenbtn] = useState(false); 

  // handle click 
  const handleClickOpen = () => {
    setNestOpen(() => !nestOpen)
  }
  const handleClickOpenbtn = () => {
    setNestOpenbtn(() => !nestOpenbtn)
  }
 
  useEffect(() => {
    setIsOpenNav(props.openNav)
  }, [props.openNav])


  const closeNav = () => {
    props.closeNav()
  }

  return (
    <>
    {
      isOpenNav === true && <div className="navbarOverlay" onClick={props.closeNav}></div>
    }
      <div className="nav navbar-header my-custom-header">
        <div className="container-fluid">
          <div className="row d-flex align-items-center my-3 navbar-row ">
            <div className="col-sm-3 part1 nav-part1 ">
               <div className="browse-button ">
                <button> <MdSlowMotionVideo /> Studio</button>
               </div>
            </div>
            <div className="col-sm-7 part2 nav-part2 ">
              <div className={`navbar-menu ${isOpenNav === true ? "open" : ""}`}>
                 <ul className="list list-inline menu-item">
                    <li className="list-inline-item list-item-single " onClick={props.closeNav}>
                       <Link to="/" onClick={handleClickOpen}> Home  </Link>  
                      
                        
                      
                    </li>
                
                    {/* {
                   productData.length > 0 ? productData.map((item, index) => {
                         return (<li className="list-inline-item list-item-single" key={index} onClick={props.closeNav}>
                       <Link to={`/cat/${item.cat_name.toLowerCase()}`} onClick={() => sessionStorage.setItem("cat", item.cat_name.toLowerCase())} > {item.cat_name} </Link>
                         {
                            item.items?.length !== 0 &&  
                            <ul className="dropDown-menu shadow">
                              {
                                item.items?.map((item_, index_) => {
                                   return <li key={index_} onClick={props.closeNav}> 
                                <Link to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g,"-").toLowerCase()}`} onClick={() => sessionStorage.setItem("cat", item.cat_name.toLowerCase())} > {item_.cat_name} </Link>
                              </li>
                                 
                                    })
                                  }
                          
                           </ul>
                         }
                      </li>)

                   }) : ""
                    } */}

                    <li className="list-inline-item list-item-single mega-menu-li " onClick={props.closeNav}>
                       <Link to=""   > Browse Categories <FaChevronDown className="down-arrow-item"/></Link>  
                       <ul className="dropDown-menu mega-menu shadow">
                          <div className="row">

                          {
                         productData.length > 0 ? productData.map((item, index) => {
                             return <div className="col-md-3" key={index}>
                             <div className="mega-menu-drop-down-list">
                                  <h3 > <Link to={`/cat/${item.cat_name}`}> {item.cat_name} </Link> </h3>

                                   {
                                  item.items?.length !== 0 &&  
                                  <ul >
                                     {
                                        item.items?.map((item_, index_) => {
                                          return <li key={index_}> 
                                                <Link to={`/cat/${item.cat_name}/${item_.cat_name.replace(/\s/g,"-").toLowerCase()}`}> {item_.cat_name} </Link>
                                            </li>
                                 
                                         })
                                       }
                          
                                  </ul>
                                  }
                                </div>
                              </div>
                                          
                          }) : ""
                            }
                              
                              <div className="col-md-3">
                                 <div className="mega-menu-drop-down-list">
                                      <img src={sreen} alt=""  />
                                 </div>
                              </div>
                              
                          </div>
                       </ul>
                    </li>
                   
                    <li className="list-inline-item list-item-single"  onClick={props.closeNav}>
                       <Link to="" onClick={handleClickOpenbtn} > Setting  <FaChevronDown className="down-arrow-item"/> </Link>
                       <ul className="dropDown-menu shadow">
                        <li> 
                          <Link to="/"> Home </Link>
                        </li>
                        <li> 
                          <Link href="/about"> About </Link>
                        </li>
                        <li> 
                          <Link href="/blog"> Blog </Link>
                        </li>
                        <li> 
                          <Link href="/contact"> Contact </Link>
                        </li>
                        <li> 
                          <Link href="/login"> Login </Link>
                        </li>
                        <li> 
                          <Link href="/register"> Register </Link>
                        </li>
                        <li> 
                          <Link href="/privacy-police"> Privacy Policy </Link>
                        </li>
                       </ul>
                    </li>
                   
                 </ul>      


                 {
                  windowWidth < 992 &&
                  <>
                  {
                    context.isLogin !== "true" && 
                    <div className="pl-3 pr-3">
                        <button className="sign-in-btnabc" onClick={closeNav}> <Link to="/signIn">  Sign In </Link> </button>
                    </div>
                  }
                    
                  </>

                 }
              </div>      

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar; 











