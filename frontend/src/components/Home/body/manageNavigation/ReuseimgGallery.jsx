import React from 'react'
import { Grid } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ReuseimgGallery = ({img1,img2, imgmid,img3,img4}) => {
  return (
   
    <Grid container spacing={1} >
    {/* First Grid */}
    <Grid item xs={12} sm={6} md={4}>
      <div>
        <LazyLoadImage effect="blur" className='grid_img' src={`${img1}`}  alt="gallery-image" placeholderSrc='' />
      </div>
      <div>
      <LazyLoadImage effect="blur" className='grid_img' src={`${img2}`}  alt="gallery-image" />
      </div>
    </Grid>

    {/* Second Grid */}
    <Grid item xs={12} sm={6} md={4}>
      <div >
      <LazyLoadImage effect="blur" className='grid_img' src={`${imgmid}`} alt="gallery-image" />

      </div>
    </Grid>
    {/* Third Grid */}
    <Grid item xs={12} sm={6} md={4}>
    <div>
        <LazyLoadImage effect="blur" className='grid_img' src={`${img3}`}  alt="gallery-image" />
      </div>
      <div>
      <LazyLoadImage effect="blur" className='grid_img' src={`${img4}`}  alt="gallery-image" />
      </div>
    </Grid>
  </Grid>

  )
}

export default ReuseimgGallery