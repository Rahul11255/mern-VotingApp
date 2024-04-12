import React from "react";
import "./info.css";
import TypingEffect from "./TypingEffect";
import ReuseCard from "./ReuseCard";
import ReuseInfosection from "./ReuseInfosection";
import {ashokPillarData,theNationalEmblem,dhamekhStupaData,ashokaChakra} from "./data"
import Title from "../Title";

const AshokStambh = () => {
  return (
    <div className="universalNavbarContainer">
    <Title title={"The Ashok Stambh"} />

      <section className="info_hero_img">
        <TypingEffect text={"The Ashok Stambh"} />
        <img
          loading="lazy"
          src="https://www.stirworld.com/images/article_gallery/190610035737.jpg"
          alt=""
        />
      </section>

      <ReuseCard
        internLink1={"Dhamekh"}
        internLink2={"NationalEmblem"}
        internLink3={"AshokChakra"}
        title1={"Dhamekh Stupa, Sarnath"}
        title2={"The National Emblem of India"}
        title3={"Ashoka Chakra"}
        img1={
          "https://lh3.googleusercontent.com/p/AF1QipO7TM6msQLSBi06FmbiNQ868Nj8J5or4JqToLnB=s680-w680-h510"
        }
        img2={
          "https://img.jagranjosh.com/images/2022/July/1272022/Compress_National_emblem.webp"
        }
        img3={
          "https://lh3.googleusercontent.com/p/AF1QipO12rf-Q9BHYMa4Zi6WcBt6aLt3COF64P_SMREr=s680-w680-h510"
        }
        cnt1={
          " Sarnath is one of the most important, sacred and famous religious as well as pilgrimage place for the Buddhist World and as this is well  known that this place is directly associated with the life and  teachings. "
        }
        cnt2={
          "The national emblem of India, also known as the State Emblem of India, is based on the Lion Capital of Ashoka, which is an ancient sculpture from 280 BCE."
        }
        cnt3={
          " As per the provision of Article 79 of Indian Constitution, the House of the People, the Lok Sabha is the "
        }
      />

      <section className="info_data">
        <div>
        <ReuseInfosection title="Ashok Pillar" data={ashokPillarData}/>
        <ReuseInfosection id={"Dhamekh"} title="Dhamekh Stupa, Sarnath" data={dhamekhStupaData} />
        <ReuseInfosection id={"NationalEmblem"} title="The National Emblem of India" data={theNationalEmblem} />
        <ReuseInfosection id={"AshokChakra"} title="Ashoka Chakra" data={ashokaChakra} />
        </div>
      </section>
    </div>
  );
};

export default AshokStambh;
