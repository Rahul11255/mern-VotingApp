import React from "react";
import { motion } from "framer-motion";
import "./info.css";
// import { img loading='lazy' } from 'react-lazy-load-image-component';

const ReuseCard = ({
  internLink1,
  internLink2,
  internLink3,
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  cnt1,
  cnt2,
  cnt3,
  btop1,
  btop2,
  btop3,
}) => {
  const downToupAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 1,
      },
    },
  };
  return (
    <section className="info_card">
      <div style={{ borderTop: `${btop1}` }}>
        <a href={`#${internLink1}`}>
          <img loading='lazy' className="card-img" effect='blur' src={`${img1}`} alt="" />
        </a>
        <motion.h3 initial="hidden" animate="show" variants={downToupAnimation}>
          {title1}
        </motion.h3>
        <p>{cnt1}</p>
      </div>
      <div style={{ borderTop: `${btop2}` }}>
        <a href={`#${internLink2}`}>
          <img loading='lazy' className="card-img" effect='blur' src={`${img2}`} alt="" />
        </a>
        <motion.h3 initial="hidden" animate="show" variants={downToupAnimation}>
          {title2}
        </motion.h3>
        <p>{cnt2}</p>
      </div>
      <div style={{ borderTop: `${btop3}` }}>
        <a href={`#${internLink3}`}>
          <img loading='lazy' className="card-img" effect='blur' src={`${img3}`} alt="" />
        </a>
        <motion.h3 initial="hidden" animate="show" variants={downToupAnimation}>
          {title3}
        </motion.h3>
        <p>{cnt3}</p>
      </div>
    </section>
  );
};

export default ReuseCard;
