import { useState } from "react";


const UseCounter = (initialState = 0) => {
  const [count , setCount ] = useState(initialState);
   
        // increment
        const handleIncrement = () => {
            setCount((prevState) => prevState + 1);  

        }; 

        // decrement
        const handleDescrement = () => {
          if (count > 1 ) {
            setCount((prevState) => prevState - 1);
          }
        }; 

        // reset
        const handleReset = () => {
          setCount(0);
        }; 

  return {count, setCount, handleIncrement, handleDescrement, handleReset }; 
}

export default UseCounter




















