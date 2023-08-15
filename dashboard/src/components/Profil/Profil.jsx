import React from "react";
import { Link } from "react-router-dom";

const Profil = (props) => {
  // transmettre l'id du de l'utilisateur vers la page UsercontainerHome.
  let userInfos = `/${props.userId}`;
  return (
    <>
      <Link to="/sportResults">
        <div className="usercontainerHome">
          {/* <img src={imageSrc} alt="" /> */}
          <img src={props.imageSrc} alt="" />
          <span>{props.userInfos.firstName}</span>
        </div>
      </Link>
    </>
  );
};

export default Profil;
