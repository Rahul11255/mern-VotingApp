import React from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from "react-router-dom"
import { motion } from "framer-motion";


const ImageItem = ({ className, img ,title ,path,fadeInUpAnimation}) => {
   
  const navigate = useNavigate()

  const naviagteLink=()=>{
    navigate(path)
  }

  return (
    <motion.div variants={fadeInUpAnimation} className={`${className} gitem`}>
    <img loading="lazy" src={img} alt="landing_images" />
    <div className="gitem_body">
      <h1>{title}</h1>
      <Button  size="small" color="info" endIcon={<SendIcon />} onClick={naviagteLink} >
        Read more ..
      </Button>
    </div>
  </motion.div>
  );
};

export default ImageItem;