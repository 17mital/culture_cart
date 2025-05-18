
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

import UseCounter from "../../hooks/UseCounter"


import "./Counter.css";
const Counter = () => {
  const { count,  handleIncrement, handleDescrement } = UseCounter(1)

  return (
    <>
       <div className="counter d-flex align-items-center">
         <h1> { count } </h1>
            <button className='upper' onClick={handleIncrement} > <MdKeyboardArrowUp /> </button>
             <button className='lower' onClick={handleDescrement}> <IoIosArrowDown /> </button>
        </div>
    </>
  )
}

export default Counter













