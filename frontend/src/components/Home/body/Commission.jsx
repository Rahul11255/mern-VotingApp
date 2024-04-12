import React from "react";
import "./commision.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Commission = () => {
  return (
    <section className="commission_card_container">
      <div className="commision_hero_text">
        <h2>HON'BLE COMMISSION</h2>
      </div>
      <div className="c_card_item">
        <div>
          <Link to={`/eci/shri-rajiv-kumar`}>
            <LazyLoadImage
            effect='blur'
              className="card_item_img"
              src="https://www.eci.gov.in/newimg/gallery/ec-rk.jpg"
              alt=""
            />
          </Link>
          <h1>Shri Rajiv Kumar</h1>
          <p>Chief Election Commissioner</p>
        </div>
        <div>
          <Link to={`/eci/Shri-Gyanesh-Kumar`}>
            <LazyLoadImage
            effect='blur'
              className="card_item_img"
              src="https://www.eci.gov.in/newimg/gallery/EC-Shri-Gyanesh-Kumar.jpg"
              alt=""
            />
          </Link>

          <h1>Shri Gyanesh Kumar</h1>
          <p>Election Commissioner</p>
        </div>
        <div>
          <Link to={`/eci/Dr-Sukhbir-Singh-Sandhu`}>
            <LazyLoadImage
            effect='blur'
              className="card_item_img"
              src="https://www.eci.gov.in/newimg/gallery/EC-Dr-Sukhbir-Singh-Sandhu.jpg"
              alt=""
            />
          </Link>

          <h1>Dr Sukhbir Singh Sandhu</h1>
          <p>Election Commissioner</p>
        </div>
      </div>
    </section>
  );
};

export default Commission;
