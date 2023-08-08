import React from "react";
import "../Home/Home.css";

const Profil = (props) => {
  console.log(props.imageSrc);
  return (
    <>
      <div className="userInformations">
        {/* <img src={imageSrc} alt="" /> */}
        <img src={props.imageSrc} alt="" />
        <span>{props.userInfos.firstName}</span>
      </div>
    </>
  );
};

export default Profil;
