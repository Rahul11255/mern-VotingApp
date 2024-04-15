import React, { memo, useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import electionsymbol from "../../images/election-symbol.png";
import profileimg from "../../images/profile_img.png";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import indiannationsymbol from "../../images/india-nation-symbol.png";
import EditIcon from "@mui/icons-material/Edit";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@mui/material";
import Votenow from "./Votenow";
import Title from "../body/Title";
import DataLoading from "../DataLoading";

const Voter = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userid = localStorage.getItem("id");

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/singleUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
      console.log(response.data);
      setUsername(`${response.data.fname} ${response.data.lname}`);
      localStorage.setItem("isVoted", response.data.isVoted);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch User Data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    } else {
      fetchUserData();
    }

    const uploadedImage = localStorage.getItem(`uploadedImage${userid}`);
    if (uploadedImage) {
      setSelectedImage(uploadedImage);
    }
  }, [navigate, userid]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        // Save image to local storage
        localStorage.setItem(`uploadedImage${userid}`, reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    // Remove image from local storage
    localStorage.removeItem(`uploadedImage${userid}`);
  };

  const handleButtonClick = () => {
    document.getElementById("upload-input").click(); // Trigger click event on input field
  };

  return (
    <div className="user_profile_container">
      <Title title={username} />

      {/* {isLoading ? (
            <DataLoading/>
          ) : error ? (
            <div className="loadinguser"> <ErrorIcon style={{color:"red"}} sx={{ fontSize: 60 }}/> <h3> Error: {error}</h3></div>
          ) : (
      <div className="profile_voting_container">
        <div className="pitem">
            <div className="voter_profile_card">
              <div className="profile_img">
                {selectedImage ? (
                  <img loading="lazy" src={selectedImage} alt="" />
                ) : (
                  <img loading="lazy" src={userData.image} alt="" />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleButtonClick}
                  startIcon={<EditIcon />}  
                >
                  Edit Profile Photo
                </Button>
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />

                <IconButton
                  aria-label="delete"
                  className="delete-icon"
                  onClick={handleClearImage}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <div className="profile_details">
                <p
                  className="profile_details_ele"
                  style={{ textTransform: "capitalize" }}
                >
                  <span className="span">Name :</span> {userData.fname}{" "}
                  {userData.lname}
                </p>
                <p className="profile_details_ele">
                  <span className="span">Age : </span>
                  {userData.age}
                </p>
                <p className="profile_details_ele">
                  <span className="span">Role : </span>
                  {userData.role}
                </p>
                <p className="profile_details_ele">
                  <span className="span">State : </span>
                  {userData.state}
                </p>
                <p className="profile_details_ele">
                  <span className="span"> Vote-Status :</span>
                  {userData.isVoted === true ? (
                    <Button variant="contained" color="success">
                      True
                    </Button>
                  ) : (
                    <Button variant="contained" size="small" color="error">
                      False
                    </Button>
                  )}
                </p>
                <p className="profile_details_ele" style={{ fontSize: "15.5px" ,  }}>
                  <span className="span"> Email-Id : </span>
                  {userData.email}
                </p>
              </div>
            </div>
        </div>
        <div className="vitem">
          <Votenow userData={userData} fetchUserData={fetchUserData} />
        </div>
      </div> )} */}
      <section className="top_header_section">
        <div className="top_header">
          <div className="top_header_left">
            <div className="top_left_img">
              <Link to={"/"}>
                <img loading="lazy" src={electionsymbol} alt="election_logo" />
              </Link>
            </div>
            <div
              className="top_left_details"
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              <p>Government of India</p>
              <p style={{ fontWeight: "bold", color: "black" }}>
                Election Commision of India
              </p>
            </div>
          </div>
          <div className="top_header_right">
            <div className="top_right_img">
              <img loading="lazy" src={userData?.image} 
              onError={(event) => (event.target.src = profileimg)}  
              alt="election_logo" />
            </div>
            <div className="top_left_img">
              <img
                style={{
                  width: "75%",
                  paddingLeft: "5px",
                  borderLeft: "1px solid black",
                }}
                loading="lazy"
                src={indiannationsymbol}
                alt="election_logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="profile_section">
        <div className="profile_container">
         {isLoading ? (
            <DataLoading/>
          ) : error ? (
            <div className="loadinguser"> <ErrorIcon style={{color:"red"}} sx={{ fontSize: 60 }}/> <h3> Error: {error}</h3></div>
          ) : (
        <>
          <div className="profile_left">
            <img src={userData?.image }
              onError={(event) => (event.target.src = profileimg)}  
             alt="" />
            <div>
              <p>
                {userData?.fname} {userData?.lname}
              </p>
              <p>{userData?.role}</p> <p>ID: {userData?._id}</p>
            </div>
          </div>
          <div className="profile_right">
            <div className="profile_right_1">
              <div className="email_id">
                <p>{userData?.email}</p>
                <p>Email ID</p>
              </div>
              <div className="age">
                <p>{userData?.age}</p>
                <p>Age</p>
              </div>
              <div className="state">
                <p>{userData?.state}</p>
                <p>State</p>
              </div>
            </div>
            <div className="profile_right_2">
              <p>Vote Status</p>
              <p style={{ color: userData?.isVoted ? "green" : "red" }}>
                {userData?.isVoted ? "Yes" : "No"}
              </p>
              <div className="vote_status">
                {userData?.isVoted ? (
                  <CheckCircleIcon sx={{ fontSize: 100, color: "green" }} />
                ) : (
                  <DangerousIcon sx={{ fontSize: 100, color: "red" }} />
                )}
              </div>
            </div>
          </div>
          </> )}
        </div>
      </section>

      <section className="user_voting_container">
          <Votenow userData={userData} fetchUserData={fetchUserData} />
      </section>
    </div>
  );
};

export default memo(Voter);
