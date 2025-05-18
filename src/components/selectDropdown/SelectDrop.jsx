
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener'; 


import "./SelectDrop.css"

const SelectDrop = ({ data }) => {
  
  const [isOpenDrop, setIsOpenDrop ] = useState(false); 
  const [selectIndex, setSelectIndex ] = useState(0); 
  const [selectItem, setSelectItem ] = useState("All Categories"); 

  const [listdata, setListData ] = useState(data);
  const [listdata2, setListData2 ] = useState(data);

 // handleClickOpen
 const handleClickOpen =() => {
    setIsOpenDrop(() => !isOpenDrop); 
 }

 // handleClose 
 const handleClose = (index, item) => {
    setSelectIndex(index); 
    setIsOpenDrop(() => !isOpenDrop); 
    setSelectItem(item)
 }

// filterList
const filterList = (e) => {
     const keyward = e.target.value.toLowerCase();

     const list = listdata2.filter((item) => {
      return item.toLowerCase().includes(keyward); 
     })

     const list2 = list.filter((item, index) => list.indexOf(item) === index)

     setListData(list2);  
    
}


  return (
    <>
       <ClickAwayListener onClickAway={() => setIsOpenDrop(false) }>
          <div className="select-drop ">
              <p className="select-drop-category" onClick={handleClickOpen}> { selectItem.length > 14 ? selectItem.substring(0, 12)+ "...." :  selectItem }   <FaAngleDown /> </p> 
                
              {
              isOpenDrop &&   <div className="select-dropdown">       
              <div className="search-field ">
                <input type="text" placeholder="Search here ...." onChange={filterList}/>
              </div>
              <ul className="search-result ">
                {
                  listdata.map((item, index) => {
                    return  <li key={index} >
                    <Link to="" onClick={() => handleClose(index, item)} className={`${selectIndex === index ? "active" : ""}`} >{item} </Link>
                  </li>
                  })
                }     

              </ul>
           </div>
            }

          </div>

        </ClickAwayListener>
       
    </>
  )
}

export default SelectDrop














