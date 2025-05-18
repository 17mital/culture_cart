
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { MdFilterListAlt } from "react-icons/md";

// import images
import cat1 from "../../assets/img/icons/category-1.svg"
import banner11 from "../../assets/img/banner/banner-11.png"

// slider css
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import { MyContext } from "../../App";



import "./SideBar.css";
const SideBar = (props) => {
   
   const [value, setValue ] = useState([20, 60000]);
   const [totalLength, setTotalLength] = useState([]);

   const context = useContext(MyContext); 

   var catLength = 0;
   var lengthArr = [];
  
  
   // get length 
   useEffect(() => {
      props.data?.length !== 0 &&
      props.data?.map((item, index) => {
               item.items?.length !== 0 &&
                   item.items?.map((item_) => {
                       catLength += item_.products.length
                   })
               lengthArr.push(catLength)
               catLength = 0;
           })
  
       const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
       setTotalLength(list)
  
   }, []);

  


  return (
    <>
    <div className= {`sidebar-left  ${context.openFilters === true && "click"}`}>
        <div className="card-box res-hide ">
           <h2> Category </h2>

           <div className="catList">

          {
            props.data?.length !== 0 && 
              props.data?.map((item, index) => {
                 return  <div className="catItem" key={index}>
                 <div className="text">
                    <Link to={`/cat/${item.cat_name.toLowerCase()}`}> <img src={cat1} alt="" /> {item.cat_name} </Link> 
                    <p className="count"> {totalLength[index]} </p>
                 </div>
             </div>
              })
          }

           </div>
        </div>

      {/* Fill by price */}
        <div className="card-box abcd">
           <h2 > Fill by price </h2>

           <RangeSlider value={value} onInput={setValue} min={20} max={60000} step={5}/>

           <div className="colors"> 
               <span> From : </span > ${value[0]} 
               <span className="high-price"> To : </span > ${value[1]} 
           </div>

          <div className="customer-checkbox mt-3">
             <h6> Color </h6>
             <ul>
               <li>
                  <input type="checkbox" id="red"/>
                  <label htmlFor="red"> <span className="color-count"> Red (56)</span></label>
               </li>
               <li>
                  <input type="checkbox" id="green"/>
                  <label htmlFor="green"> <span className="color-count"> Green (78) </span></label>
               </li>
               <li>
                  <input type="checkbox" id="blue"/>
                  <label htmlFor="blue"> <span className="color-count"> Blue (54)</span></label>
               </li>
               <li>
                  <input type="checkbox" id="yellow" />
                  <label htmlFor="yellow"> <span className="color-count"> Yellow (56) </span></label>
               </li>
               <li>
                  <input type="checkbox" id="orange"/>
                  <label htmlFor="orange"> <span className="color-count"> Orange (56)</span></label>
               </li>
             </ul>

             <h6 className="mt-3"> Item Condition </h6>
             <ul>
               <li>
                  <input type="checkbox" id="new"/>
                  <label htmlFor="new"> <span className="color-count">New (1506)</span></label>
               </li>
               <li>
                  <input type="checkbox" id="refur"/>
                  <label htmlFor="refur"> <span className="color-count"> Refurbished (27) </span></label>
               </li>
               <li>
                  <input type="checkbox" id="used"/>
                  <label htmlFor="used"> <span className="color-count"> Used (45)</span></label>
               </li> 
             </ul>
          </div>
           <a href="" className="btn-default-filter" onClick={()=> context.openFilterShop()}> <MdFilterListAlt className="filter" /> Filter </a>
        
        </div>
 
    

      {/* New products*/}
        <div className="card-box-img">
             <img src={banner11} alt="" />
        </div>


      </div>
    </>
  )
}

export default SideBar














