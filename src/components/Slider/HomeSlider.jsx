
import Slider from "react-slick"; 
import { IoIosSend } from "react-icons/io";

// slider css  import 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../../src/assets/img/slider/slider-1.png"
import slider2 from "../../../src/assets/img/slider/slider-2.png"


import { useContext } from "react";
import { MyContext } from "../../App";


import "./HomeSlider.css" 
  
const HomeSlider = () => {
  const context = useContext(MyContext); 


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : true,
    arrows : true , 
    autoplay : true,
  }; 




  return (
    <>
    <section className="home-slider ">
       <div className="container-fluid">
            <Slider {...settings} className="home-slider-main">
                <div className="item">
                    <img src={slider1} alt="" />
                    <div className="info">
                         <h2> Don’t miss the Bliss of <br/> Pooja's</h2>
                         <p> Sign up for the daily Blogs</p>
                     
                         <form className="subscribe-form">
                           <IoIosSend className="send" />
                           <input type="email" placeholder="Your emaill address" />
                           <button type="submit"> Subscribe </button>
                         </form>
                    </div>

                </div>
                <div className="item">
                    <img src={slider2} alt="" />
                      <div className="info"> 
                         <h2> The Charm of Food in <br/> India </h2>
                        <p> Save up to 50% off on your first order </p>      
                        <form className="subscribe-form">
                           <IoIosSend  className="send"/>
                           <input type="email" placeholder="Your emaill address" />
                           <button type="submit"> Subscribe </button>
                         </form>     
                     </div>
                </div>
               
            </Slider>
       </div>
    </section>
       
    </>
  )
}

export default HomeSlider; 











