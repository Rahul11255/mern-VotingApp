import React from 'react';
import fileDownalod from '../../../images/Final Press Note.pdf'
import { Grid } from '@mui/material';
import banner from "../../../images/election-sechedule-banner.jpg";
import data_date_banner from "../../../images/data-date-banner.png"
import SwiperCarsoul from "../../voter/SwiperCarsoul";
import Button from '@mui/material/Button';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import phase1 from '../../../images/phase-1-cropped.jpg'
import phase2 from '../../../images/phase-2-cropped.jpg'
import phase3 from '../../../images/phase-3-cropped.jpg'
import phase4 from '../../../images/phase-4-cropped.jpg'
import phase5 from '../../../images/phase-5-cropped.jpg'
import phase6 from '../../../images/phase-6-cropped.jpg'
import phase7 from '../../../images/phase-7-cropped.jpg'
import FileDownloadIcon from '@mui/icons-material/FileDownload';



const ElectionSchedule = () => {
  return (
    <div className='schedule_container'>
      <div className='schedule_banner'>
        <img loading='lazy' src={banner} alt="election-schedule-banner" />
      </div>
      <section className='india_map_area'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img loading='lazy' className='data_date_banner_img' src={data_date_banner} alt="date-date-banner" />
          </Grid>
          <Grid item xs={12} md={6}>
          <SwiperCarsoul
          img1={phase1}
          img2={phase2}
          img3={phase3}
          img4={phase4}
          img5={phase5}
          img6={phase6}
          img7={phase7}
          />
          </Grid>
        </Grid>
      </section>
      <section className='download_schedule'>
        <a  href={fileDownalod} download> <Button  startIcon={<PictureAsPdfOutlinedIcon  />} sx={{color:"black"}}  endIcon={<FileDownloadIcon/>}>
        General Election Schedule
      </Button>  </a>
      </section>
    </div>
  );
};

export default ElectionSchedule;
