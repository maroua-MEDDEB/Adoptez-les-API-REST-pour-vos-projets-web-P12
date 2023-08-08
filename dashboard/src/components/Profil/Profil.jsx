import React from "react";
import "../Home/Home.css";

const Profil = (props) => {
  console.log(props);
  return (
    <>
      <div className="userInformations">
        {/* <img src={imageSrc} alt="" /> */}
        <img src={props.imageSrc} alt="" />
        <span>{props.userInfos}</span>
      </div>
    </>
  );
};

export default Profil;
