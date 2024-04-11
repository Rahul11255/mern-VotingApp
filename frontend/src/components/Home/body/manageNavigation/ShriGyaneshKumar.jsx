import React from 'react';
import gyaneshimg from "../../../images/Shri-Gyanesh-Kuma.png";
import ReuseimgGallery from './ReuseimgGallery';

const ShriGyaneshKumar = ({title}) => {


  return (
    <>

    <div className='commision_member'>
      <img loading='lazy' src={gyaneshimg} alt="" />
    </div>
    <div className='image_gallery'>
       <ReuseimgGallery
      img1={"https://www.eci.gov.in/newimg/gallery/ecgyanesh1.jpg"}
      img2={"https://www.eci.gov.in/newimg/gallery/ecgyanesh2.jpg"}
      imgmid={"https://www.eci.gov.in/newimg/gallery/ecgyanesh3.jpg"}
      img3={"https://www.eci.gov.in/newimg/gallery/ecgyanesh4.jpg"}
      img4={"https://www.eci.gov.in/newimg/gallery/ecgyanesh5.jpg"}
       />
      </div>
      </>
  );
};

export default ShriGyaneshKumar;
