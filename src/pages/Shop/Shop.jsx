
import { FaSortAmountDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import SideBar from "../../components/sideBer/SideBar";

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import dataAll from "../../data/data"

// import axios from "axios";
import "./Shop.css";

const Shop = ( props  ) => {

  const [dropDownOpen, setDropDownOpen ] = useState(false); 
  const [dropDownOpen2, setDropDownOpen2 ] = useState(false); 

  const [allProduct, SetAllProduct] = useState([]); 
  const [data, setData] = useState([]);

  const context = useContext(MyContext); 



  // get all data
  useEffect(() => {
    window.scrollTo(0,0);

    // getData(`http://localhost:5050/productData`);

    setTimeout(() => {
      SetAllProduct(dataAll.productData);
    }, 3000)

 }, []);

//  const getData = async(url) => {
//    try {
//       await axios.get(url).then((response) => {
//         SetAllProduct(response.data);
//       })
//    } catch (error) {
//      console.log(error.message);
//    }
//  };

 let id = useParams();   
 let singleId = id.id; 


  let itemData = []; 


 

 useEffect(() => {

     allProduct.length !== 0 && 
       allProduct.map((item, index)=> {
          //page == single cat
             if (props.single === true){
                if  (item.cat_name.toLowerCase() == singleId.toLowerCase()) {
                     item.items.length !== 0 && 
                       item.items.map((item_, index_) => {
                          item_.products.length !== 0
                            item_.products.map((product) => {
                              itemData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                            })
                       })
                } 
             }

           //page == double cat 
         else{
          item.items.length !== 0 &&  
           item.items.map((item_) => {
              if(item_.cat_name.split(" ").join("-").toLowerCase() == singleId.toLowerCase()) {
                item_.products.length !== 0 
                item_.products.map((product) => {
                  itemData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                })
              }

            })  
           }   
       })

  const list = itemData.filter((item, index) => itemData.indexOf(item) === index);
  
   setData(list);

  
   
 }, [allProduct, itemData ]); 


     // handle close
     const handleCloseDrop = () => {
      setDropDownOpen(() => !dropDownOpen)
     }
  
     // handle close
     const handleCloseDrop2 = () => {
      setDropDownOpen2(() => !dropDownOpen2)
     }
  
     // filter by price
    const filterByPrice = (minValue, maxValue) => {
           
      allProduct.length !== 0 &&
        allProduct.map((item, index) => {
          
              //page == single cat
              if (props.single === true) {
                  if (singleId === item.cat_name.toLowerCase()) {
                      item.items.length !== 0 &&
                          item.items.map((item_) => {
                       
                              item_.products.length !== 0 &&
                                  item_.products.map((product) => {
                                      let price = parseInt(product.price.toString().replace(/,/g, ""))
                                      if (minValue <= price && maxValue >= price) {
                                         
                                          itemData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                      }

                                  })
                          })
                  }
              }

              else {
                  item.items.length !== 0 &&
                      item.items.map((item_, index_) => {
                          if (item_.cat_name.split(' ').join('-').toLowerCase() == singleId.split(' ').join('-').toLowerCase()) {
                              item_.products.map((product) => {
                                  let price = parseInt(product.price.toString().replace(/,/g, ""))
                                  if (minValue <= price && maxValue >= price) {
                                      itemData.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                  }
                              })

                          }
                      })
              }

          })

      const list2 = itemData.filter((item, index) => itemData.indexOf(item) === index);
      setData(list2);
  }



  return (
    <>

           {
               context.windowWidth < 992 && 
              <button className="btn btn-primary w-100 filters-btn mb-2" onClick={()=> context.openFilterShop()}> Filters </button> 
           }

    {/* breadcrumb section */}
      <div className="listingProduct my-4">
         <div className="container-fluid">
             <div className="row">
                <div className="breadCrumb">
                   <h2 className="text-capitalize"> {sessionStorage.getItem("cat")} </h2>
                   <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to="/"> Home </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={`/cat/${sessionStorage.getItem("cat")}`} className="text-capitalize"> {sessionStorage.getItem("cat")} </Link>
                    </li>
                    
                   {
                    props.single === false && 
                        <li className="list-inline-item text-capitalize">
                            {singleId.split('-').join(' ')} 
                       </li>
                   }

                   </ul>
                </div>
             </div>
         </div>
      </div>


      {/* listing data  */}
        <div className="productListingData">
          <div className="container-fluid">
            <div className="row">
         
      
               <div className={`col-md-3  left-sidebar ${context.openFilters === true && "open"}`}>
               
          
                {
                  data.length !== 0 &&  <SideBar data={allProduct} currentCatData={data} filterByPrice={filterByPrice} /> 
                }
               
               </div>

               <div className=" col-md-9 right-sidebar popular-products ">
               <div className="top-strip d-flex align-items-center justify-content-between">
                  <p> We found <span style={{color: "#3BB77E"}}> {data.length} </span> items for you! </p>
                  <div className="ml-auto  d-flex align-items-center ">
                      <div className="tab-item">
                        <button className="show-btn" onClick={handleCloseDrop }> <IoGrid /> show : 50 <FaAngleDown /> </button>
                        {
                          dropDownOpen && <ul className="dropdown-menu-abc shadow ">
                          <li className="drop-down-hover" > <button onClick={() => setDropDownOpen(false)}> 50 </button></li>
                          <li className="drop-down-hover" > <button onClick={() => setDropDownOpen(false)}> 100 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> 150 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> 200 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> All </button></li>
                          </ul>
                        }
                        
                      </div>
                      <div className="tab-item">
                        <button className="show-btn ms-3" onClick={ handleCloseDrop2 }> <FaSortAmountDown />  Sort by: Featured <FaAngleDown /> </button>
                         {
                          dropDownOpen2 && <ul className="dropdown-menu-abc shadow ">
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Featured </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Price: Low to High </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Price: High to Low </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Release Date </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Avg. Rating </button></li>
                          </ul>
                         }
                      </div>
                  </div>
               </div>   


                   <div className="row product-row ms-3 ">

                      {
                        data.length !== 0 && 
                        data.map((item, index) => {
                          return (
                            <div className="item width-big" key={index}>
                              <Product tag={item.type} item={item}  /> 
                          </div>
                          )
                        })
                      }

                    
                   </div>
                   
               </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Shop
