import { useParams } from "react-router-dom";
import CardInfos from "../CardInfos/CardInfos";
import calorieIcon from "../../assets/images/icons_cards/icon-calorie.png";
import carbohydrateIcon from "../../assets/images/icons_cards/icon-carbohydrate.png";
import proteinIcon from "../../assets/images/icons_cards/icon-protein.png";
import lipidIcon from "../../assets/images/icons_cards/icon-lipid.png";
import { useState } from "react";

const SportResultsTraining = () => {
  const { userId } = useParams; // déstrcuturer cet ensemble du poramètre - accéder au parapmètres de l'url courant

  //les données de CardInfos
  const data_types = [
    { icon_types: calorieIcon, text_type: "Calories" },
    { icon_types: proteinIcon, text_type: "Proteines" },
    { icon_types: carbohydrateIcon, text_type: "Glucides" },
    { icon_types: lipidIcon, text_type: "Lipides" },
  ];

  const showTypes = data_types.map((el, index) => {
    return (
      <CardInfos
        key={index}
        text_type={el.text_type}
        icon_types={el.icon_types}
      />
    );
  });

  const [value, setValue] = useState("maroua");
  return (
    <>
      <h1>SportResultsTraining</h1>;
      <div className="container_profil_user">
        <header>
          <h1>bonjour {value}</h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </header>
        <section className="section_infos">
          <div className="items_activity_sport">
            <div className="item_activity"></div>
            activités
            <div className="items_measure">
              <div className="item_measure">mesures</div>
            </div>
          </div>
          <div className="grid_cards">
            <div className="cardInfos">{showTypes}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SportResultsTraining;
