import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";

import notFound from "../../assets/img/icons/page-404.png"

import "./NotFound.css"
const NotFound = () => {
  return (
    <>
      <div className="not-found ">
        <div className="container-fluid">
          <div className="row">
            <div className="not-show text-center">
              <img src={notFound} alt="" /> 
              <h2> Page Not Found </h2>
              <p> The link you clicked may be broken or the page may have been removed.
                  visit the <Link to="/"> Homepage </Link> or <Link to="/contact"> Contact us </Link> about the problem. </p>
               <div className="search-box">

               </div>
               <Link to="/" className="back-to-home"> <FaHome /> Back To Home Page </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound













