import React, { useEffect, useState } from "react";
import "../components/main.css";
import Menu from "../components/DetailApi";
import { Link } from "react-router-dom";
import DetailList from "../components/DetailList"
import Modal from "./Modal";


const evenNumber = Menu.filter((curElem)=>{
  return curElem.id % 2 === 0
})




export default function ModalA() {
  const [list, setList] = useState(Menu);
const [even, setEven] = useState(evenNumber);
const [show, setShow] = useState(false)
const [data, setData] = useState("")
const [search, setSearch] = useState('')
const [detail, setDetail] = useState()
const [consider, setConsider] = useState(false)






const handleId =(id)=>{

  let Num = Menu.filter((curElem)=>{
  if(curElem.id == id) {
    console.log("true")
  
    return true    
  }  
    })
   setData(Num[0])
    console.log("Num:", Num)
  
}



const handleEven =(e)=>{  
  if(e.target.checked){
    console.log("even numbers")
    setShow(true)
    setEven(evenNumber);
  }
  else{
    setShow(false)
    setList(Menu)
    console.log("all")
  }
  
}

const getDetail=(id)=>{
const detailedList = DetailList.filter((curElem)=>{
return curElem.id === id
})
console.log("detail", detailedList)
setDetail(detailedList[0])
setConsider(true)

}




  return (
    <>




    <div className="a">
{/* HERE WE GET LOADING PROBLEM IN MODAL*/}

    {/* {setConsider? (
      <>
  <Modal detail={detail}/>
</>
): <></>} */}
  
      <h2>ALL CONTACTS</h2>
      <div className="f">
                <p className="text1" >{data.id}</p> 
                <p className="text1">{data.first_name}</p>
                <p className="text1">{data.last_name}</p>
                <p className="text1">{data.country}</p>
                <p className="text1">{data.country_id}</p>
                <p className="text1">{data.email}</p>
                <p className="text1">{data.phone_number}</p>
      </div>
<input type="search"  placeholder="" className="search-text" 
onChange={(e)=>handleId(e.target.value)}></input>



{show? 
<>
<div className="aa">
        {even.map((curElem) => {
          const {id,first_name,last_name,country,country_id,email,phone_number,} = curElem;
          return (
            <>
           <div className="card" >
                <p className="text1" >{id}</p> 
                <p className="text1">{first_name}</p>
                <p className="text1">{last_name}</p>
                <p className="text1">{country}</p>
                <p className="text1">{country_id}</p>
                <p className="text1">{email}</p>
                <p className="text1">{phone_number}</p>
              </div>
            </>
          );
        })}
      </div> 
</> :
 <>
 <div className="aa">
        {list.map((curElem) => {
          const {id,first_name,last_name,country,country_id,email,phone_number,} = curElem;
          return (
            <>
              <div className="card">
                <p className="text1" onClick={()=>getDetail(id)}>{id}</p>
                <p className="text1" >{first_name}</p>
                <p className="text1" >{last_name}</p>
                <p className="text1">{country}</p>
                <p className="text1">{country_id}</p>
                <p className="text1">{email}</p>
                <p className="text1">{phone_number}</p>
              </div>
            </>
          );
        })}
      </div>
 </>
 } 

     
    </div>



    




    <div className="d">
    <Link to="/"> <button className="btn3">CLOSE</button></Link>

<div className="d1">
<input type="checkbox" id="even"   className="chk" value={show}
          onChange={handleEven}/>
  <label htmlFor="even" className="chk-text">Show Even Numbers</label>
</div>


    </div>
   </>
  );
}
