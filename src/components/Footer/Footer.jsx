
// import icons
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md"; 
import { CiClock2 } from "react-icons/ci";
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai"; 
import { IoIosSend } from "react-icons/io";

// import images 
import logo from "../../assets/img/logo2.jpg"
import payment1 from "../../assets/img/pay/google-play.jpg"
import payment2 from "../../assets/img/pay/app-store.jpg"
import payment3 from "../../assets/img/pay/payment-method.png"
import icon1  from "../../assets/img/icons/icon-1.svg"
import icon2  from "../../assets/img/icons/icon-2.svg"
import icon3  from "../../assets/img/icons/icon-3.svg"
import icon4  from "../../assets/img/icons/icon-4.svg"
import icon5  from "../../assets/img/icons/icon-5.svg"


import "./Footer.css"
const Footer = () => {
  return (
    <>
     {/* newsletter banner  */}
     <div className="news-letter">
        <div className="container-fluid">
             <div className="row">
               <div className="item">              
                    <div className="info">
                         <h2> Stay home & get your Festive <br/>  Shopping deals </h2>
                         <p> Start Your Daily Shopping with <a href="#"> Culture cart</a>  </p>
                         <form className="subscribe-form">
                           <IoIosSend className="send" />
                           <input type="email" placeholder="Your emaill address" />
                           <button type="submit"> Subscribe </button>
                         </form>
                    </div>
                    </div>  
             </div>
          </div>
        </div>

    {/* Top footer section  */}
     <div className="top-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="collumPartAll">

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon1} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Best prices & offers </h4>
                          <p> Orders 500 RS. or more </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon2} alt="" />
                      </div>
                      <div className="single-text">
                          <h4>Best delivery </h4>
                          <p> 24/7 amazing services </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon3} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Great daily deal </h4>
                          <p> When you sign up </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon4} alt="" />
                      </div>
                      <div className="single-text">
                          <h4>  Wide assortment </h4>
                          <p> Mega Discounts </p>
                      </div>
                    </div>

                    <div className="item-box-icon">
                      <div className="single-img">
                         <img src={icon5} alt="" />
                      </div>
                      <div className="single-text">
                          <h4> Easy returns </h4>
                          <p> Within 30 days </p>
                      </div>
                    </div>

                </div>
              </div>
            </div>
        </div>


    {/* bottom footer */}
      <div className="footer-section my-4">
        <div className="container-fluid">
          <div className="row ">
          <div className="footer-all-part d-flex justify-content-between"> 
             <div className="footer-part1">
                <div className="footer-left-box">
                  <img src={logo} alt=""  />
                  <p><span> <IoLocationOutline /> </span> XYZ rajnagar , Mumbai</p>
                  <p><span><MdOutlineHeadphones /> </span> Call Us <a href="#" className="link-text-all"> (+91)-540-025-124553 </a></p>
                  <p><span> <IoMailOpenOutline /></span> Email <a href="#" className="link-text-all"> sale@Namste.com </a></p>
                  <p><span> <CiClock2 /> </span> Email Hours 10:00 - 18:00, Mon - Sat </p>
               </div>
             </div>
             <div className="footer-part2">
                 <h2> Company </h2>
                 <ul>
                  <li>
                    <a href="#"> About Us </a>
                  </li>
                  <li>
                    <a href="#"> Delivery Information </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#"> Terms & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Contact Us </a>
                  </li>
                  <li>
                    <a href="#"> Support Center </a>
                  </li>
                  <li>
                    <a href="#"> Careers </a>
                  </li>
                 </ul>
             </div>
             <div className="footer-part2">
                 <h2> Account </h2>
                 <ul>
                  <li>
                    <a href="#"> Sign In </a>
                  </li>
                  <li>
                    <a href="#"> View Cart </a>
                  </li>
                  <li>
                    <a href="#"> My Wishlist </a>
                  </li>
                  <li>
                    <a href="https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx"> Track My Order </a>
                  </li>
                  <li>
                    <a href="#"> Help Ticket </a>
                  </li>
                  <li>
                    <a href="#"> Shipping Details </a>
                  </li>
                  <li>
                    <a href="#"> Compare products </a>
                  </li>
                 </ul>
             </div>

             <div className="footer-part2">
                 <h2> Corporate </h2>
                 <ul>
                  <li>
                    <a href="#"> Become a Seller</a>
                  </li>
                  <li>
                    <a href="#"> Affiliate Program </a>
                  </li>
                  <li>
                    <a href="#"> Farm Business </a>
                  </li>
                  <li>
                    <a href="#"> Farm Careers </a>
                  </li>
                  <li>
                    <a href="#"> Our Suppliers </a>
                  </li>
                  <li>
                    <a href="#"> Accessibility </a>
                  </li>
                  <li>
                    <a href="#"> Promotions </a>
                  </li>
                 </ul>
             </div>

             <div className="footer-part2">
                 <h2> Popular </h2>
                 <ul>
                  <li>
                    <a href="#">Foods Sweet </a>
                  </li>
                  <li>
                    <a href="#"> Spices </a>
                  </li>
                  <li>
                    <a href="#">TraditionaL Attire</a>
                  </li>
                  <li>
                    <a href="#"> Pooja samgries</a>
                  </li>
                  <li>
                    <a href="#"> Terracota</a>
                  </li>
                  <li>
                    <a href="#"> Handicrafts </a>
                  </li>
                  <li>
                    <a href="#"> Kolhapuri Chappal </a>
                  </li>
                 </ul>
             </div>

             <div className="footer-part1">
                <div className="footer-right-box">
        
                   <div className="image2 ">
                      <p> Secured Payment Gateways </p>
                       <a href="#"> <img src={payment3} alt="" /> </a>                   
                   </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>


      {/* bottom footer */}
      <div className="bottom-footer">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-4 same-width ">
               <div className="footer-left">
                  <p> All rights reserved By <a href="#"> Namaste</a> </p>
               </div>
               <div></div>
               <div></div>
            </div>
            <div className="col-sm-3 d-flex align-items-center social-media  same-width">
               <div className="bottom-right">
                 <div className="follow-media">
                  <div className="follow">
                    <p> Follow Us </p>
                  </div>
                  <div className="media">
                    <span> <FaFacebookF className="all-icon"/> <FiTwitter className="all-icon" /> <AiOutlineSkype className="all-icon"/> <FaInstagram className="all-icon"/> </span>
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

export default Footer





































