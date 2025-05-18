
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import Slider from "react-slick";
import axios from "axios";

// slider css  import 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { MyContext } from "../../App"; 
import "./CategorySlider.css";


const CategorySlider = () =>{
   
  const [allData, setAllData] = useState([]);
  const [totalLength, setTotalLength] = useState([]);
  const context = useContext(MyContext); 
  
   // get all data 

   const getData = async(url) => {
    try {
       await axios.get(url).then((response) => {
         setAllData(response.data);
       })
    } catch (error) {
      console.log(error.message);
    }
  };


   // get all data
   useEffect(() => {
    getData(`http://localhost:5050/productData`);
   }, []);

 var catLength = 0;
 var lengthArr = [];


 // get length 
 useEffect(() => {
     allData?.length !== 0 &&
         allData?.map((item, index) => {
             item.items?.length !== 0 &&
                 item.items?.map((item_) => {
                     catLength += item_.products.length
                 })
             lengthArr.push(catLength)
             catLength = 0;
         })

     const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
     setTotalLength(list)

 }, [allData]);

 // background 
  const [itemBg, setItemBg ] = useState([
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",

  ])



  let setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade : false,
    arrows :  context.windowWidth > 992 ? true : false, 
    autoplay : context.windowWidth > 992 ? 2000 : false,
    centerMode : context.windowWidth > 992 ? true : false
  }

  return (
    <>
      <div className="category-slider">
         <div className="container-fluid">
            <h2 className="heading mb-5"> Featured Categories</h2>

            <Slider {...setting} className="category-slider-main">
 
                    {
                        allData?.length !== 0 &&
                            allData.map((item, index) => {
                                return (
                                    <div className='category-item' key={index} >
                                        <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                            <div className='info ' style={{ background: itemBg[index] }}>
                                                <img className="my-3" src={item.image} width="80" />
                                                <h5 className='text-capitalize mt-3'>{item.cat_name}</h5>
                                             <p className="mb-3">{totalLength[index]} items</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            
                            }
                          )   
                    }                     
            </Slider>
         </div>
      </div>
    </>
  )
}

export default CategorySlider













