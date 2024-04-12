import React from "react";
import "./info.css";
import TypingEffect from "./TypingEffect";
import ReuseCard from "./ReuseCard";
import ReuseInfosection from "./ReuseInfosection";
import {
  bharataMandapam,
  g20Summit,
  natarajanStatue,
  vasudhaivaKutumbakam,
} from "./data";
import Title from "../Title";

const BharatMandapam = () => {
  return (
    <div className="universalNavbarContainer">
    <Title title={"Bharat Mandapam"} />

      <section className="info_hero_img">
        <TypingEffect text={"Bharat Mandapam"} />
        <img
          loading="lazy"
          src="https://www.indiatradefair.com/images/halls/convention-center/3.jpg"
          alt=""
        />
      </section>
      <ReuseCard
        internLink1={"G20"}
        internLink2={"NatarajaStatue"}
        internLink3={"VasudhaivaKutumbakam"}
        title1={"G20 Summit"}
        title2={"Natarajan statue"}
        title3={"Vasudhaiva Kutumbakam"}
        img1={
          "https://backend-live-coc.cfr.org/cdn/ff/qJfLFiVSk1OugSupPDOrCZkOhxc2FNTiKo1cWdY_YFU/1694697777/public/publications/global-memos/RTSNHZGS.jpg"
        }
        img2={
          "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/09/08122642/20230906037L.jpg"
        }
        img3={
          "https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/g20_theme-sixteen_nine.png?size=948:533"
        }
        cnt1={
          "The 18th G20 Summit was held in New Delhi, India from September 9–10, 2023. The summit was the culmination of all the G20 processes and meetings held throughout the year among ministers, senior officials, and civil.. "
        }
        cnt2={
          "The G20 Summit venue, 'Bharat Mandapam,' hosted the world's tallest 'Nataraja' statue, measuring 28 feet in height, including its pedestal."
        }
        cnt3={
          "Indian Prime Minister Narendra Modi chose as his theme for the Group of 20 presidency a term from Sanskrit scripture, “Vasudhaiva Kutumbakam,” emphasizing global unity. The phrase, taken from the Hindu  "
        }
      />

      <section className="info_data">
        <div>
          <ReuseInfosection
            title=" Facts about Bharat Mandapam"
            data={bharataMandapam}
          />
          <ReuseInfosection id={"G20"} title="G20 Summit" data={g20Summit} />
          <ReuseInfosection
            id={"NatarajaStatue"}
            title="Natarajan statue"
            data={natarajanStatue}
          />
          <ReuseInfosection
            id={"VasudhaivaKutumbakam"}
            title="Vasudhaiva Kutumbakam"
            data={vasudhaivaKutumbakam}
          />
        </div>
      </section>
    </div>
  );
};

export default BharatMandapam;
