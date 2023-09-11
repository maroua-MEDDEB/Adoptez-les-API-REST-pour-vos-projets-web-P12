import React from "react";
import {
  // UsercontainerHome,
  Userimg,
  UserName,
  UserProfile,
  ListUsers,
} from "./index.style.js";
import PropTypes from "prop-types";

function Profil({ userId, userInfos, imageSrc }) {
  // transmettre l'id du de l'utilisateur vers la page SportReultTraining.
  let userInformations = `/sportResults/${userId}`;
  return (
    <>
      <ListUsers>
        <li style={{ listStyle: "none", textAlign: "center" }}>
          <UserProfile href={userInformations}>
            {/* <UsercontainerHome> */}
            {/* <img src={imageSrc} alt="" /> */}
            <Userimg src={imageSrc} alt="" />
            <UserName>{userInfos.firstName}</UserName>
            {/* </UsercontainerHome> */}
          </UserProfile>
        </li>
      </ListUsers>
    </>
  );
}

Profil.prototypes = {
  userId: PropTypes.number.isRequired,
  userInfos: PropTypes.object.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
export default Profil;
