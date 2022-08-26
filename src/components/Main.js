import React from 'react'
import "../components/main.css"
import { Link } from "react-router-dom";



export default function Main() {
  return (
    <div className='main'>
    <Link to="/all">  <button className='btn1'>ALL CONTACTS</button></Link>
    <Link to="/us">   <button className='btn2'>US CONTACTS</button></Link>
     
    </div>
  )
}
