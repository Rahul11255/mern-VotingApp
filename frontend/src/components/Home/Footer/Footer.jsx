import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import {Instagram, LinkedIn } from "@mui/icons-material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css";
import symbol from "../../images/india-nation-symbol.png";
import { NavLink, useLocation } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from "@mui/material/Button";

function ScrollToTopOnNavChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="footer_container">
      <ScrollToTopOnNavChange />
      <Grid container spacing={3} className="foooter_child_container">
        <Grid item xs={12} sm={6} md={3}>
          <h3 className="footer_top_text"> The Election Commission of India</h3>
          <hr className="hr" style={{ width: "96%" }} />
          <div className="india-flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt=""
            />
            <img src={symbol} alt="" />
          </div>
          <p className="eci_info">
            The Election Commission of India (ECI) is a constitutional body
            established by the Constitution of India to conduct and regulate
            elections in the country.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="quick_links">
          <h3 className="footer_top_text"> Quick Links</h3>
          <hr className="hr" />
          <ul>
          <li>
              <NavLink className="navlink" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to={"/votes/count"}>
                Live Votes Count
              </NavLink>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <NavLink className="navlink" to="/signup">
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="quick_links">
          <h3 className="footer_top_text">Content Links</h3>
          <hr className="hr" />
          <ul>
            <li>
              <NavLink className="navlink" to={"/ram-mandir"}>
                Ram Mandir
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to={"/parliament"}>
                The Parliament of India
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to={"/culture"}>
                Indian culture
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to={"/bhart-mandapam"}>
                Bharat Mandapam
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to={"/ashok-stambh"}>
                The Ashok Stambh
              </NavLink>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="follow_us">
          <div>
            <h3 className="footer_top_text">Follow Us</h3>
            <hr className="hr" style={{ widows: "100%" }} />
            <div className="icons">
              <a
                href="https://github.com/Rahul11255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <IconButton
                    aria-label="facebook"
                    className="icon facebook_icon"
                  >
                    <GitHubIcon />
                  </IconButton>{" "}
                  GitHub
                </li>
              </a>

              <a href="https://wa.me/9354081946"
                target="_blank"
                rel="noopener noreferrer">
                <li>
                  <IconButton
                    aria-label="twitter"
                    className="icon twitter_icon"
                  >
                    <WhatsAppIcon />
                  </IconButton>{" "}
                  What's up
                </li>
              </a>

              <a href="https://www.instagram.com/rahulpatel11255/"
                target="_blank"
                rel="noopener noreferrer">
                <li>
                  <IconButton
                    aria-label="instagram"
                    className="icon instagram_icon"
                  >
                    <Instagram />
                  </IconButton>{" "}
                  instagram
                </li>
              </a>

              <a href="https://www.linkedin.com/in/rahul-patel-323baa213/"
                target="_blank"
                rel="noopener noreferrer">
                <li>
                  <IconButton
                    aria-label="linkedin"
                    className="icon linkedin_icon"
                  >
                    <LinkedIn />
                  </IconButton>{" "}
                  linkedin
                </li>
              </a>
              <li style={{listStyle:"none" ,color:"white",marginTop:"10px"}}>
              <b>Ph - </b> <em>9354081946</em>   
              </li>

            </div>
            <a href="mailto:rr710505@gmail.com?subject=Inquiry%20About%20Your%20Service&body=Hello,%0D%0A%0D%0AI'm reaching out to inquire about your services. Please provide me with more information.%0D%0A%0D%0AThank you.">
              <Button variant="contained" style={{ marginTop: "20px" }}>
                Contact me
              </Button>
            </a>
            
          </div>
        </Grid>
      </Grid>
      <div className="copyright">
        Copyright  <CopyrightIcon sx={{fontSize:20}}/>  2024, Rahul Patel All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
