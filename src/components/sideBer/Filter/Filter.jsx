
import { useState } from "react";
import Slider from "react-slider"; 

 const MIN = 20;
 const MAX = 60000;


import "./Filter.css";
const Filter = () => {

     const [values, setValues ] = useState([MIN, MAX]);

  return (
    <>
      <div className="app my-3">
        <div className="box">

           <Slider className="slider" value={values} min={MIN} max={MAX} onChange={setValues}/> 
           <div className="colors"> 
               <span> From : </span > ${values[0]} 
               <span className="high-price"> To : </span > ${values[1]} 
           </div>
           {/* <small> 
              <span> Current Range : </span>  ${ values[1] - values[0] }
           </small> */}
        
        </div>
      </div>
    </>
  )
}

export default Filter

















