import React from 'react'
import "./info.css"
import { ReactTyped } from "react-typed";


const TypingEffect = ({text,color}) => {
  return (
    <div className="info_img_body"> <div>  <ReactTyped strings={[`${text}`]} typeSpeed={100} 
    backSpeed={80} loop
    style={{color:`${color}`}}
    /></div>  </div>
  )
}

export default TypingEffect