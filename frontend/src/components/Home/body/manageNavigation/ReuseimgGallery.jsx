import React from 'react'
import { Grid } from '@mui/material';


const ReuseimgGallery = ({img1,img2, imgmid,img3,img4}) => {
  return (
   
    <Grid container spacing={1} >
    {/* First Grid */}
    <Grid item xs={12} sm={6} md={4}>
      <div>
        <img loading='lazy' className='grid_img' src={`${img1}`}  alt="" />
      </div>
      <div>
      <img loading='lazy' className='grid_img' src={`${img2}`}  alt="" />
      </div>
    </Grid>

    {/* Second Grid */}
    <Grid item xs={12} sm={6} md={4}>
      <div >
      <img loading='lazy' className='grid_img' src={`${imgmid}`} alt="" />

      </div>
    </Grid>
    {/* Third Grid */}
    <Grid item xs={12} sm={6} md={4}>
    <div>
        <img loading='lazy' className='grid_img' src={`${img3}`}  alt="" />
      </div>
      <div>
      <img loading='lazy' className='grid_img' src={`${img4}`}  alt="" />
      </div>
    </Grid>
  </Grid>

  )
}

export default ReuseimgGallery