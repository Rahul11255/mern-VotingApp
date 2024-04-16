import HowToVoteIcon from "@mui/icons-material/HowToVote";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Navbar from "../navbar/Navbar";
import Bhart_Mandapam from "../../images/Bharat_Mandapam.jpg";
import ashok_stambh from "../../images/ashok_stambh.jpg";
import temple from "../../images/ramji_mandir.jpg";
import parliamnet from "../../images/new_parliament.jpg";
import culture from "../../images/traditional_lady.jpg";
import { motion } from "framer-motion";
import "./landing.css";
import ashok from "../../images/india-nation-symbol.png";
import { useNavigate } from "react-router-dom";
import ImageItem from "./ImageItem";
import { ReactTyped } from "react-typed";
import Commission from "./Commission";
import Title from "./Title";
import { Link } from "react-router-dom";
import WrapSection from "./WrapSection";

const Landing = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const usernamae = localStorage.getItem("userName");
  const naviagte = useNavigate();

  useEffect(() => {
    const snackbarTimeout = setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);

    return () => clearTimeout(snackbarTimeout);
  }, []);

  const loggedIn = localStorage.getItem("isLoggedIn") === "true";

  const redirectToProfile = () => {
    naviagte("/user/profile");
  };

  const fadeInUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="first_container">
      <Title title={""} />

      <Navbar />
      <div className="second_container">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          className="image images_container"
        >
          <ImageItem
            fadeInUpAnimation={fadeInUpAnimation}
            className={"gird_item-1"}
            path="/ashok-stambh"
            img={ashok_stambh}
            title={"The Ashok Stambh"}
          />
          <ImageItem
            fadeInUpAnimation={fadeInUpAnimation}
            className={"gird_item-2"}
            path="/culture"
            img={culture}
            title={"Indian culture"}
          />
          <ImageItem
            fadeInUpAnimation={fadeInUpAnimation}
            className={"gird_item-3"}
            path="/parliament"
            img={parliamnet}
            title={"The Parliament of India"}
          />
          <div className="gird_item-4">
            <img loading="lazy" src={ashok} alt="landing_images" />
            <h3>
              government of <span style={{ color: "orangered" }}>i</span>
              <span style={{ color: "darkblue" }}>ndia</span>
            </h3>
          </div>
          <ImageItem
            fadeInUpAnimation={fadeInUpAnimation}
            className={"gird_item-5"}
            path="/bhart-mandapam"
            img={Bhart_Mandapam}
            title={"Bharat Mandapam"}
          />
          <ImageItem
            className={"gird_item-6"}
            path="/ram-mandir"
            img={temple}
            title={"Ram Mandir"}
          />
        </motion.div>
        <div className="text">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className="hero_text"
          >
            <div className="marquee">
              <p>Vote now</p>
            </div>
            <motion.h2 variants={fadeInUpAnimation}>
              <ReactTyped
                strings={["The Political Party"]}
                typeSpeed={100}
                loop
                backSpeed={60}
              />
            </motion.h2>
            <motion.h2 variants={fadeInUpAnimation}>
              Vote for the
              <br />
              best <span style={{ color: "#E31837" }}>candidate</span> <br />&
              discover peace
            </motion.h2>
            <motion.a href="#votenow">
            <motion.button
              variants={fadeInUpAnimation}
              className="btn_vote_now"
              onClick={() => {
                if (!loggedIn) {
                  setOpenDialog(true);
                } else {
                  redirectToProfile();
                }
              }}
            >
              Vote now
            </motion.button>
            </motion.a>
            <motion.a href="#livevote" variants={fadeInUpAnimation}>
              <Button
                className="l_vote_live"
                onClick={() => {
                  naviagte("/votes/count");
                }}
                color="secondary"
                variant="contained"
                startIcon={<HowToVoteIcon />}
                endIcon={<HowToVoteIcon />}
              >
                Check live Votes
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Please Login or Create an Account</DialogTitle>
        <Button
          onClick={() => {
            setOpenDialog(false);
            naviagte("/login");
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            setOpenDialog(false);
            naviagte("/signup");
          }}
        >
          Create Account
        </Button>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert>
          Jai Shree Ram
          <span style={{ textTransform: "capitalize" }}> {usernamae} </span>
        </Alert>
      </Snackbar>
      <section className="election_schedule">
        <Link to={`/eci/election-schedule`}>
          <h3>Election Schedule</h3>
        </Link>
      </section>
      <Commission />
      <section className="land_wrap_section">
          <WrapSection/>
      </section>
    </div>
  );
};

export default Landing;
