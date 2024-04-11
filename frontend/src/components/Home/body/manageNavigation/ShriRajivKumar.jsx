import React from 'react'
import rajivimg from "../../../images/cec_Rajiv_img.jpg"
import ReuseimgGallery from './ReuseimgGallery'
import {rajivKumar} from "../info/data"

const ShriRajivKumar = ({title}) => {

  return (
    <>
    <div className='commision_member'>
      <img loading='lazy'  src={rajivimg} alt="" />
    </div>

    <section className='member_data_container'>
          <div className='member_data'>
          {rajivKumar.map((data,key)=>{
             return <p key={key}>{data}</p>
          })}
          </div>
    </section>

    <div className='image_gallery'>
       <ReuseimgGallery
      img1={"https://www.eci.gov.in/newimg/gallery/cec_Rajiv_img1.jpg"}
      img2={"https://www.eci.gov.in/newimg/gallery/cec_Rajiv_img2.jpg"}
      imgmid={"https://www.eci.gov.in/newimg/gallery/cec_Rajiv_img3.jpg"}
      img3={"https://www.eci.gov.in/newimg/gallery/cec-cycling-event-01.jpg"}
      img4={"https://www.eci.gov.in/newimg/gallery/cec_Rajiv_img5.jpg"}
       />
      </div>
     
    </>
  )
}

export default ShriRajivKumar