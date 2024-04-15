import React from 'react'
import {useParams} from "react-router-dom"
import ShriGyaneshKumar from './ShriGyaneshKumar';
import DrSukhbirSinghSandhu from './DrSukhbirSinghSandhu';
import ShriRajivKumar from './ShriRajivKumar';
import "./cardinfo.css"
import Title from '../Title';
import ElectionSchedule from './ElectionSchedule';

const CardInfo = () => {
    const { id } = useParams();
 
     const title = id
 
  return (
    <>  
     <div style={{padding:"10px"}}>
     <Title  title={`${title}`} />
     </div>
      {id === "Shri-Gyanesh-Kumar" && <ShriGyaneshKumar title={title} />}
      {id === "Dr-Sukhbir-Singh-Sandhu" && <DrSukhbirSinghSandhu  title={title} />}
      {id === "shri-rajiv-kumar" && <ShriRajivKumar  title={title}/>}
      {id === "election-schedule" && <ElectionSchedule title={title}/>}

    </>
  )
}

export default CardInfo