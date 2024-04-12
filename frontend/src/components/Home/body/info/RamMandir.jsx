import React from "react";
import "./info.css";
import TypingEffect from "./TypingEffect";
import ReuseCard from "./ReuseCard";
import {ramJanmabhoomi,ramMandirInauguration,statueOfRamji,babriMasjid} from './data'
import ReuseInfosection from "./ReuseInfosection";
import Title from "../Title";

const RamMandir = () => {


  return (
    <div className="universalNavbarContainer">
    <Title title={"Ram Mandir"} />
      <section className="info_hero_img">
        <TypingEffect text={"Ram Mandir"} />
        <img
          loading="lazy"
          src="https://temple.yatradham.org/Product/temple/temple_bCWJtXm0_202402070910120.jpg"
          alt=""
        />
      </section>
      <ReuseCard
        internLink1={"RamJanmabhoomi"}
        internLink2={"BabriMasjid "}
        internLink3={"Statue"}
        title1={"Ram Janmabhoomi"}
        title2={"Babri Masjid"}
        title3={"The Statue of Ram ji"}
        img1={
          "https://www.setmytrip.in/wp-content/uploads/2023/12/PSX_20231231_170054.jpg"
        }
        img2={
          "https://www.scobserver.in/wp-content/uploads/2018/10/2560px-Babri_Masjid-1-1536x655.jpg"
        }
        img3={
          "https://www.livemint.com/lm-img/img/2024/01/24/600x338/Ayodhya_Ram_Mandir_1706104723218_1706104723375.jpg"
        }
        cnt1={
          "Ram Janmabhoomi, or Birthplace of Rama , is the site where Hindus believe that Lord Rama, the seventh avatar of Vishnu, was born. The epic Ramayana states that Rama was born on the banks of the Sarayu river in Ayodhya.  "
        }
        cnt2={
          "The Babri Masjid was a mosque in Ayodhya, India, that was demolished by Hindu activists on December 6, 1992. The mosque's name comes from Mughal emperor Babur, who is said to have ordered the construction."
        }
        cnt3={
          " The Statue of Rama is a planned monument in Ayodhya, Uttar Pradesh, India dedicated to the Hindu god Rama. The statue will be 181 m (594 ft) in breadth and 251 m (823 ft) tall including plinth and umbrella."
        }
      />

      <section className="info_data">
        <div>
        <ReuseInfosection title=" Facts about our Ram Mandir" data={ramMandirInauguration}/>
        <ReuseInfosection id={"RamJanmabhoomi"} title="Ram Janmabhoomi" data={ramJanmabhoomi} />
        <ReuseInfosection id={"BabriMasjid"} title="Babri Masjid" data={babriMasjid} />
        <ReuseInfosection id={"Statue"} title="The Statue of Ram ji" data={statueOfRamji} />

        </div>
      </section>
    </div>
  );
};

export default RamMandir;
