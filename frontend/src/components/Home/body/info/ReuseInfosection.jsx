import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { motion } from "framer-motion";

const ReuseInfosection = ({ title, data, id }) => {
  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 2,
        duration: 2,
      },
    },
  };

  const downToupAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.h2
        initial="hidden"
        animate="show"
        variants={downToupAnimation}
        id={`${id}`}
      >
        <TipsAndUpdatesIcon /> {title}
      </motion.h2>
      <motion.ul initial="hidden" animate="show" variants={fadeInUpAnimation}>
        {data.map((item, index) => (
          <li variants={fadeInUpAnimation} key={index}>
            {item.includes(":") ? (
              <>
                <span className="bold-text">{item.split(":")[0]}</span>:{" "}
                {item.split(":")[1]}
              </>
            ) : (
              <span>{item}</span>
            )}
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default ReuseInfosection;
