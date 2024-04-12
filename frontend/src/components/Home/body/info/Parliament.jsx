import React from "react";
import "./info.css";
import TypingEffect from "./TypingEffect";
import ReuseCard from "./ReuseCard";
import {parliamentFacts,president,rajyaSabha,LokSabha} from './data'
import ReuseInfosection from "./ReuseInfosection";
import Title from "../Title";

const Parliament = () => {

  return (
    <div className="universalNavbarContainer">
    <Title title={"The Parliament Of India"} />
  
      <section className="info_hero_img">
        <TypingEffect text="The Parliament of india" />
        <img
          loading="lazy"
          src="https://sansad.in/cms/poi/uploads/NPB_1_6f59600db9.png"
          alt=""
        />
      </section>
      <ReuseCard
        internLink1={"President"}
        internLink2={"RajyaSabha"}
        internLink3={"LokSabha"}
        title1={"President of India"}
        title2={"Rajya Sabha"}
        title3={"Lok Sabha"}
        img1={"https://sansad.in/uploads/POI_Final_15aa2e8b30.png"}
        img2={"https://sansad.in/uploads/RS_Final_82a71e4637.png"}
        img3={"https://sansad.in/uploads/LS_Final_74db8da0d6.png"}
        btop1={"14px solid #364093"}
        btop2={"14px solid #CC0000"}
        btop3={"14px solid #17B169"}
        cnt1={
          "Droupadi Murmu was sworn in as the 15th President of India on 25 July, 2022. Previously, she was the Governor of Jharkhand from 2015 to 2021."
        }
        cnt2={
          "Council of States i.e Rajya Sabha is the Upper House of the Indian Parliament. Rajya Sabha consists of the."
        }
        cnt3={
          " As per the provision of Article 79 of Indian Constitution, the House of the People, the Lok Sabha is the l."
        }
      />

      <section className="info_data">
        <div>
        <ReuseInfosection  title="Facts about our Parliament" data={parliamentFacts} />
        <ReuseInfosection id={"President"} title="President of India" data={president} />
        <ReuseInfosection id={"RajyaSabha"} title="Rajya Sabha" data={rajyaSabha} />
        <ReuseInfosection id={"LokSabha"} title=" Lok Sabha" data={LokSabha} />


        </div>
      </section>
    </div>
  );
};

export default Parliament;
