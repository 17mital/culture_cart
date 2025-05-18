
import { FaArrowRight } from "react-icons/fa";
import HomeSlider from "../../components/Slider/HomeSlider";
import TopProduct from "../../components/TopProducts/TopProduct";
import CategorySlider from "../../components/catSlider/CategorySlider";
import Product from "../../components/product/Product";


import banner1 from "../../assets/img/banner/banner-1.png";
import banner2 from "../../assets/img/banner/banner-2.png";
import banner3 from "../../assets/img/banner/banner-3.png";
import banner4 from "../../assets/img/banner/banner-4.png";

import Slider from "react-slick";

// import axios from "axios";
import { useEffect, useState } from "react";
import data from "../../data/data" 



import "./Home.css";
const Home = () => {
  const [prodData, setprodData] = useState([])
  const [catArray, setcatArray] = useState([]);
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]); 


  const [bestSells, setBestSells] = useState([]); 



     



  // get all data
  useEffect(() => {
    // getData(`http://localhost:5050/productData`);

  setTimeout(() => {
    setprodData(data.productData);
  }, 3000)
 

  
 }, []);

//  const getData = async(url) => {
//    try {
//       await axios.get(url).then((response) => {
//         setprodData(response.data);
//       })
//    } catch (error) {
//      console.log(error.message);
//    }
//  };

 const catArr = []; 

 // all category
 useEffect(() => {
  prodData?.length !== 0 && 
   prodData?.map((item) => {
     item.items?.length !== 0 && 
       item.items?.map((item_) => {
          catArr.push(item_.cat_name); 
     })
   }) 
 
   const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
   setcatArray(list2);
   setactiveTab(list2[0])
 
 }, [ prodData]);


 // get all product 
 useEffect(() => {
     let arr = [];
     setActiveTabData(arr); 

     prodData?.length !== 0 && 
       prodData?.map((item, index) => {
          item.items?.map((item_, index_) => {
             if (item_.cat_name === activeTab ) {
              {
                item_.products?.length !== 0 &&
                    item_.products?.map((product) => {
                        arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                    })

                setActiveTabData(arr)
               
               }
             }
          })
       })

    


 }, [prodData, activeTab]);

 
 let bestArr = []; 

 // best sell get all product 
  useEffect(() => {


    prodData?.length !== 0 && 
     prodData?.map((item) => {
       if (item.cat_name == "Electronics") {
         item.items.length !== 0 && 
            item.items?.map((item_) => {
               item_.products.length !== 0 && 
                 item_.products.map((item)=> {
                  bestArr.push(item)
                 })
            })        
      } 
    })
   
    setBestSells(bestArr); 

     window.scrollTo(0,0);
     
  }, [ prodData]);


      
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
    autoPlay : 3000,

  };  


  return (
    <> 
     
      <HomeSlider /> 
      <CategorySlider />   

      {/* Banner section  */}
      <div className="banner-section my-5">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-6 col-md-6 col-lg-4  banner-part">
              <div className="banner-img">
                <img src={banner1} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title"> To remain Good . Just eat those food</h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 banner-part">
              <div className="banner-img">
                <img src={banner2} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title"> Namaste Mr/Ms hit . This is yours traditional outfits </h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 banner-part extra">
              <div className="banner-img">
                <img src={banner3} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title"> More the invoice file. More the smile Aries</h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between popular-productsTileWrap ">
               <h3 className="res-full"> Popular Products </h3>
            <div className="pppppp-div"> 
              <ul className="list list-inline custom-ul res-full">   

                { 
                catArray?.length !== 0 && 
                catArray?.map((item, index) => {
                  return <li  className="list-inline-item" key={index}> 
                            <a className={`${activeTabIndex === index && "active"}`} onClick={() => {             
                            setactiveTab(item)
                            setactiveTabIndex(index)

                          }}> {item} 

                            </a>
                        </li>
                }) 
                } 

</ul>
            </div>
           
          </div>

          <div className="row product-row my-4">
                {
                  activeTabData?.length !== 0 && 
                     activeTabData?.map((item, index) => {
                        return <div className="item" key={index}>
                                   <Product tag={item.type} item={item}/> 
                               </div>
                     })
                }   
 
         
          </div> 

        </div>
      </div>
       
       {/* Daily Best Products */}
       <div className="popular-products daily-sells my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3> Daily Best Sells </h3>
          </div>
          
          <div className="row my-4">
            <div className="col-md-3">
               <div className="banner-image my-banner">
                   <img src={banner4} alt="" className="w-100" style={{borderRadius: "20px"}}/>
                   <h2 style={{color:"white" , fontSize:"20px"}}> Bring Indian Culture at your home </h2>   
                   <a href="#" className="button-shop-primary"> Shop Now <FaArrowRight /></a>        
               </div>
            </div>
            <div className="col-md-9">
            <Slider {...settings} className="product-slider-main">

            {
              bestSells.length !== 0 && 
                 bestSells?.map((item, index) => {
                    return <div className="item" key={index}>
                    <Product tag={item.type} item={item} />    
                 </div>
                 })
            }


             </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* top products */}
      <div className="topProducts my-3">
        <div className="container-fluid">
           <div className="row">
             <div className="col-sm-6 col-md-3 custom-collum ">
                <h2>Top Selling</h2>
             </div>
             <div className="col-sm-6  col-md-3 custom-collum ">
             <h2>Trending Products</h2>
             </div>
             <div className="col-sm-6  col-md-3 custom-collum ">
             <h2>Recently added</h2>   
             </div>
             <div className=" col-sm-6  col-md-3 custom-collum ">
             <h2>Top Rated</h2>   
             </div>
           </div>
        </div>
      </div>

    </>

  )
}

export default Home
