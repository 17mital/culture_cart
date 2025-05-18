

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import icons 
import { CiHeart, CiShuffle } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";


import StarRating from "../star-rate/StarRating";

import { useContext } from "react";
import  { MyContext }  from "../../App"


import "./Product.css";
const Product = (props) => {
    const [productData, setProductData] = useState([]); 

    const context = useContext(MyContext)

  useEffect(() => {
    setProductData(props.item)
  }, [props.item])


  const setProductCat=()=>{
    sessionStorage.setItem('parentCat', productData.parentCatName);
    sessionStorage.setItem('subCatName', productData.subCatName);
}


const addToCart = (item) => {
   context.addToCart(item);
}; 


  return (   
          <>  

      <div className="productThumb my-2" onClick={setProductCat}>
        {/* {
          props.tag !== null && props.tag !== undefined &&  
           <span className={`badge ${props.tag}`}> {props.tag} </span>
        }  */}


    {
      productData !== undefined && 
      <> 
        <Link to={`/product/${productData.id}`}> 
   
          <div className="product-image">      
             <img style={{width: "100%"}} src={productData.catImg} alt="" />
             <span className="discount"> {productData.discount} % </span>

             <div className="overlay">
                <ul className="list list-inline">
                    <li className="list-inline-item">
                      <a href="#"> <MdOutlineRemoveRedEye /> </a>
                     
                    </li>
                    <li className="list-inline-item">
                      <a href="#" > <CiHeart /> </a>
                     
                    </li>
                    <li className="list-inline-item" >
                      <a href="#" > <CiShuffle /> </a>
                     
                    </li>
                </ul>
             </div>
         </div>
         </Link>  
         
         <div className="info">     
           <h4 className="category">  {productData.brand}</h4>
           <div className="title"> <h3> { productData.productName?.length > 25 ? productData.productName.substring(0, 22)+ "...." :  productData.productName }  </h3></div>
           <div className="review">
               <StarRating stars ={productData.rating} /> 
           </div>
           <div className="author">
              <p> By <a href="#"> {productData.brand} </a></p> 
           </div>
           <div className="product-card-bottom">
              <div className="product-price">
                <span> RS. {productData.price} </span> <span className="old-price"> RS.{productData.oldPrice} </span>
              </div>      
           </div>
           <div className="product-cart">
               <button onClick={() => addToCart(productData)}> <IoCartOutline className="cart" /> Add </button>
            </div>
         </div>
     
      </>
    }

      </div>
      
    </>
  )
}

export default Product






