
import { useContext, useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import Counter from "../../components/counter/Counter";
import StarRating from "../../components/star-rate/StarRating";

import { MyContext } from "../../App";
import axios from "axios";




import "./Cart.css";             
const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  const context = useContext(MyContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (context.isLogin === "true") {
      getCartData(`http://localhost:5050/cartItems`); 
    }else{
      navigate("/");
    }

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
  


  const handledeleteItem = async (id) => {
   const response=  await axios.delete(`http://localhost:5050/cartItems/${id}`);

    if (response !== null) {
        getCartData("http://localhost:5050/cartItems");
        context.removeItemsFromCart(id);
    }
}          
   




  // delete single item
//   const handledeleteItem = async (id) => {
//     try {
//       const response =  await axios.delete(`http://localhost:5050/cartItems/${parseInt(id)}`)
  
//       if (response !== null) {
//         context.getCartData(`http://localhost:5050/cartItems`); 
//        context.removeItemsFromCart(id);
//       }
     
//     } catch (error) {
//       console.log(error.message);
//     }
// };   


// Clear all empty cart 
const emptyCart = () => {
  let response = null;

  cartItems.length !== 0 &&
      cartItems.map((item) => {
          response = axios.delete(`http://localhost:5050/cartItems/${parseInt(item.id)}`);
      })
  if (response !== null) {
      context.getCartData("http://localhost:5050/cartItems");
  }

  context.emptyCart();   
};     

// update cart
const updateCart = (items) => {
  context.setCartItems(items)
}



  return (
    <>
        {/* breadcrumb */}

          <div className="breadCrumbWrapper2 ">
          <div className="container-fluid">
             <div className="bradcrumb2 ">
              <nav aria-label="breadcrumb">
                 <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                     <li className="breadcrumb-item" ><Link to="/shop"> Shop </Link> </li>
                      <li className="breadcrumb-item"><Link to=""> Cart </Link> </li>          
                  </ul>
                 </nav>
              </div>
           </div>
         </div>
       
     


        {/* Cart section  */}

   <div className="cart-section py-2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 cart-part-left ">
           <div className="cart-header py-4">
               <div className="cart-left">
                 <h2 className="heading"> Your Cart </h2>
                 <div className="cart-clear">
                  <div className="left">
                     <p> There are <span> 1 </span> products in your cart </p>
                  </div>
                  <div className="right">
                    <p  > <span onClick={() => emptyCart()}> <RiDeleteBin6Fill /> </span> Clear Cart  </p>
                  </div>                              
                 </div>
               </div>   
           </div>


           {/* cart body start  */}
            <div className="cart-body">
              <div className="table-responsive">
               <table className="table table-bordered ">
                    <thead>
                          <tr > 
                            <th> Product </th>
                            <th> Unit Price </th>
                            <th> Quantity </th>
                            <th> Subtotal </th>
                            <th> Remove </th>
                          </tr>           
                    </thead>
                    <tbody>   

                      {
                       cartItems?.length !== 0 && 
                       cartItems?.map((item, index) => {
                          return(
                         <tr key={index}>
                          <td> 
                             <div className="table-box d-flex align-items-center">
                                <div className="image">
                                     <Link to={`/product/${item.id}`}> 
                                        <img src={item.catImg} alt="" />
                                     </Link>  
                                </div>
                                <div className="product-content">
                                  <Link to={`/product/${item.id}`}> <h5> {item.productName} </h5> </Link>
                                  <p> <span> <StarRating value={4.5} /> (4.5)  </span> </p>
                               
                                </div>
                             </div>
                          </td>
                          <td className="product-price"> Rs.{parseInt(item.price.split(",").join(""))}  </td>
                          <td> 
                            <div className="cart-counter">
                                <Counter item={item} cartItems={context.cartItems} index={index} updateCart={updateCart} />
                            </div>
                          </td>
                          <td className="subTotal">RS.16,999.00 </td>
                          <td className="delete-product"> 
                              <span onClick={() => handledeleteItem(item.id)}>       <RiDeleteBin6Fill  /> 
                              </span>
                          </td>
                        </tr>
                          )
                        })
                      }
                        

                      

                    </tbody>
                </table>
              </div>
            </div>

            <div className="continue-btn mb-3">
              <Link to="/"> <span> <FaLongArrowAltLeft /></span> Continue Shopping </Link>
            </div>
        </div>

         <div className="col-md-4 cart-part-right">
            <div className="total-box">
              <div className="card p-2">
                <div className="card-body">
                   <div className="sub-total d-flex align-items-center justify-content-between">
                      <p className="top-total"> Subtotal </p>
                       <h4 className="sub-price">RS. 16,999.00 </h4>
                   </div>
                   <div className='border-info d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 same-text'>Shipping</h5>
                       <h3 className='right-text ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
                    </div>


                  <div className='d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 same-text'>Estimate for</h5>
                      <h3 className='right-text ml-auto mb-0 font-weight-bold'>United Kingdom</h3>
                  </div>

                  <div className='d-flex align-items-center justify-content-between  mb-4'>
                    <h5 className='mb-0 same-text'>Total</h5>
                     <h3 className='right-text ml-auto mb-0 font-weight-bold'>RS. 16,999.00  <span className='text-g'>                
                      </span></h3>
                  </div>
                  <div className="process-btn ">
                          <Link to=""> Proceed To Checkout <PiSignOutBold className='cart-icon'/> </Link>
                  </div>

                </div>
              </div>
            </div>
        </div> 
      </div>
    </div>
   </div>












    </> 
  )
}

export default Cart;        























