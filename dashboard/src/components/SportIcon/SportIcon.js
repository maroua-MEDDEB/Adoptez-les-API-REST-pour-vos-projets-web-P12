// import { TbSwimming } from "react-icons/tb";
// import { FaBiking } from "react-icons/fa";
// import { IoMdFitness } from "react-icons/io";

import meditation from '../../assets/images/icons_navbar/meditation.png';
import swimming from '../../assets/images/icons_navbar/swimming.png';
import cycling from '../../assets/images/icons_navbar/cycling.png';
import bodybuilding from '../../assets/images/icons_navbar/bodybuilding.png';


const SportIcon = () => {
  const arrayIcons = [
    meditation, swimming, cycling, bodybuilding
  ];

  return arrayIcons.map((icon) => {
      return  (
        <div className="icon">
        <img src={icon} alt='' />
    </div>
      )
  })
}

export default SportIcon