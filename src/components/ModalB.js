import React, { useState } from "react";
import "../components/main.css";
import Menu from "../components/DetailApi"
import { Link } from "react-router-dom";


const updatedList = Menu.filter((curElem)=>{
if(curElem.country === "US"){
  return curElem
}
})

console.log("selected:", updatedList)

export default function ModalB() {
const [data, setData] = useState(updatedList)


  return (
    <>
    <div className="b">
      <h2>US CONTACTS</h2>

      <div className="bb">

{data.map((curElem)=>{
  const {id, first_name, last_name, country, country_id, email, phone_number} = curElem
  return(
    <>
     <div className="card2" key={id}>
         <p className="text2">{id}</p>
          <p className="text1">{first_name}</p>
          <p className="text1">{last_name}</p>
          <p className="text1">{country}</p>
          <p className="text1">{country_id}</p>
          <p className="text1">{email}</p>
          <p className="text1">{phone_number}</p>
        </div>
    </>
  )
})}
       


      </div>
    </div>
    <div className="d">
    <Link to="/">  <button className="btn3">CLOSE</button></Link>
    </div>

</>

  );
}
