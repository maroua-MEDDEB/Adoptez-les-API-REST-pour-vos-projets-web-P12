import React from "react";
import { Link } from "react-router-dom";

const Profil = (props) => {
  // transmettre l'id du de l'utilisateur vers la page UsercontainerHome.
  console.log(props.userId);
  let userInfos = `/sportResults/${props.userId}`;
  return (
    <>
      <Link to={userInfos}>
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
