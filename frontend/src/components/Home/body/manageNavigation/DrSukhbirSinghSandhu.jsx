import React from 'react'
import sukhimg from "../../../images/Dr-Sukhbir-Singh-Sandhu.png"
import ReuseimgGallery from './ReuseimgGallery'
import {drSukhbirsingh} from "../info/data"

const DrSukhbirSinghSandhu = ({title}) => {


  return (
    <>
    <div className='commision_member'>
      <img loading='lazy' src={sukhimg} alt="" />
    </div>

    <section className='member_data_container'>
          <div className='member_data'>
          {drSukhbirsingh.map((data,key)=>{
             return <p key={key}>{data}</p>
          })}
          </div>
    </section>

    <div className='image_gallery'>
       <ReuseimgGallery
      img1={"https://www.eci.gov.in/newimg/gallery/ecsukhbir1.jpg"}
      img2={"https://www.eci.gov.in/newimg/gallery/ecsukhbir2.jpg"}
      imgmid={"https://www.eci.gov.in/newimg/gallery/ecsukhbir3.jpg"}
      img3={"https://www.eci.gov.in/newimg/gallery/ecsukhbir4.jpg"}
      img4={"https://www.eci.gov.in/newimg/gallery/ecsukhbir5.jpg"}
       />
      </div>
    </>
  )
}

export default DrSukhbirSinghSandhu