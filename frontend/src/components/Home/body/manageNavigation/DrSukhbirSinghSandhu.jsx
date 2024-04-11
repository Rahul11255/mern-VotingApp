import React from 'react'
import sukhimg from "../../../images/Dr-Sukhbir-Singh-Sandhu.png"
import ReuseimgGallery from './ReuseimgGallery'

const DrSukhbirSinghSandhu = ({title}) => {


  return (
    <>
    <div className='commision_member'>
      <img loading='lazy' src={sukhimg} alt="" />
    </div>
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