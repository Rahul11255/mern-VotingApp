import React from "react";
import "./info.css";
import TypingEffect from "./TypingEffect";
import ReuseCard from "./ReuseCard";
import {indianCulture,diwali,ganeshChaturthi,namaste} from "./data"
import ReuseInfosection from "./ReuseInfosection";
import Title from "../Title";

const Indianculture = () => {
  return (
    <div className="universalNavbarContainer">
    <Title title={"Indian culture"} />
      <section className="info_hero_img">
        <TypingEffect text={"Indian culture"} />
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1585607344893-43a4bd91169a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
      <ReuseCard
        internLink1={"Ganesh"}
        internLink2={"Namaste"}
        internLink3={"Diwali"}
        title1={"Ganesh Chaturthi"}
        title2={"Namaste"}
        title3={"Diwali"}
        img1={
          "https://images.nativeplanet.com/webp/img/2023/08/ganesh-chaturthi-celebration_1692778396196-600x338-20230823135013.jpg"
        }
        img2={
          "https://images.pexels.com/photos/634242/pexels-photo-634242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        img3={
          "https://images.pexels.com/photos/8818750/pexels-photo-8818750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        cnt1={
          "Ganesh Chaturthi is a significant and widely celebrated Hindu festival in India. It holds immense importance as it commemorates  the birth anniversary of Lord Ganesha "
        }
        cnt2={
          "Namaste is a popular greeting in India that involves placing both palms together and raising them below the face. It's a Hindu gesture that's used to honor and respect a person or group"
        }
        cnt3={
          " Diwali is often called the 'Festival of Lights', and is celebrated by lighting lamps, and bursting crackers and fireworks. It is a festival which commemorates the victorious return of Lord Rama to Ayodhya."
        }
      />
      <section className="info_data">
        <div>
        <ReuseInfosection  title="Indian culture" data={indianCulture} />
        <ReuseInfosection id={"Ganesh"} title=" Ganesh Chaturthi" data={ganeshChaturthi} />
        <ReuseInfosection id={"Namaste"} title="Namaste" data={namaste} />
        <ReuseInfosection id={"Diwali"} title="Diwali" data={diwali} />

        </div>
      </section>
    </div>
  );
};

export default Indianculture;
