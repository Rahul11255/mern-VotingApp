import React from "react";
import "./wrap.css";
import img1 from "../../images/voter-services.png";
import img2 from "../../images/candidate-polparty.png";
import img3 from "../../images/election.png";
import img4 from "../../images/publication.png";
import img5 from "../../images/voter-education.png";
import img6 from "../../images/ict-apps.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const WrapSection = () => {
  return (
    <div className="wrap_grid_container">
      <div className="wrap_grid_item1">
        <div className="circle_div">
          <div className="circle c1">
            <img src={img1} alt="" />
          </div>
          <div className="down_arrow arrow1"></div>
        </div>
        <div className="arrow_div">
          <ArrowDropDownIcon sx={{ fontSize: 50, marginTop: "-10px" }} />
          <p>Electors</p>
        </div>
      </div>
      <div className="wrap_grid_item2">
        <div className="circle_div">
          <div className="circle c2">
            <img src={img2} alt="" />
          </div>
          <div className="down_arrow arrow2"></div>
        </div>
        <div className="arrow_div">
          <ArrowDropDownIcon sx={{ fontSize: 50, marginTop: "-10px" }} />
          <p>Political Parties</p>
        </div>
      </div>
      <div className="wrap_grid_item3">
        <div className="circle_div">
          <div className="circle c3">
            <img src={img3} alt="" />
          </div>
          <div className="down_arrow arrow3"></div>
        </div>
        <div className="arrow_div">
          <ArrowDropDownIcon sx={{ fontSize: 50, marginTop: "-10px" }} />
          <p>Election Management</p>
        </div>
      </div>
      <div className="wrap_grid_item4">
        <div className="circle_div">
          <div className="circle c4">
            <img src={img4} alt="" />
          </div>
          <div className="down_arrow arrow4"></div>
        </div>
        <div className="arrow_div">
          <ArrowDropDownIcon sx={{ fontSize: 50, marginTop: "-10px" }} />
          <p>Media & Publications</p>
        </div>
      </div>
      <div className="wrap_grid_item5">
        <div className="circle_div">
          <div className="circle c5">
            <img src={img5} alt="" />
          </div>
          <div className="down_arrow arrow5"></div>
        </div>
        <div className="arrow_div">
          <ArrowDropDownIcon sx={{ fontSize: 50, marginTop: "-10px" }} />
          <p>Voter Education</p>
        </div>
      </div>
      <div className="wrap_grid_item6">
        <div className="circle_div">
          <div className="circle c6">
            <img src={img6} alt="" />
          </div>
          <div className="down_arrow arrow6"></div>
        </div>
        <div className="arrow_div">
          <ArrowDropDownIcon sx={{ fontSize: 50, marginTop: "-10px" }} />
          <p>ICT APPS</p>
        </div>
      </div>
    </div>
  );
};

export default WrapSection;
