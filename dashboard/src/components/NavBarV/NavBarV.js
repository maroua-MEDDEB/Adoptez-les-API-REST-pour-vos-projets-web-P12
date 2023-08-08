import { SportIcon } from "../../components/index";
import meditation from "../../assets/images/icons_navbar/meditation.png";
import swimming from "../../assets/images/icons_navbar/swimming.png";
import cycling from "../../assets/images/icons_navbar/cycling.png";
import bodybuilding from "../../assets/images/icons_navbar/bodybuilding.png";

const NavBarV = () => {
  const arrayIcons = [meditation, swimming, cycling, bodybuilding];

  return (
    <>
      <div className="navBarV">
        <div className="icons">
          {arrayIcons.map((icon, index) => {
            return <SportIcon icon={icon} key={index} />;
          })}
        </div>
        <span className="copyright"> Copiryght, SportSee 2020</span>
      </div>
    </>
  );
};

export default NavBarV;
