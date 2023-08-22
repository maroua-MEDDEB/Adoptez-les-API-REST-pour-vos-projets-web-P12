import { useParams } from "react-router-dom";
import CardInfos from "../CardInfos/CardInfos";

import { useState, useEffect } from "react";
import { getDataByUserId, getAllDataMocked } from "../../service/mockedAPI";
import { User } from "../../model/User";

const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
};

const SportResultsTraining = () => {
  const { userId } = useParams(); // déstrcuturer cet ensemble du poramètre - accéder au parapmètres de l'url courant
  const [state, setState] = useState(initialState);
  const { isLoading, isDataLoaded, data: mockedData, error } = state;
  // console.log(state.data.userMainData[0].userInfos);
  // const userData = getDataByUserId(userId);
  // console.log(userData);

  const user = new User(userId, mockedData, false);
  const firstName = user?._firstName || "unknown user";

  const { nutriments, values } = new User(
    userId,
    mockedData?.userMainData,
    false
  )._keyData;
  console.log(nutriments);
  //les données de CardInfos
  // const data_types = [
  //   { icon_types: calorieIcon, text_type: "Calories" },
  //   { icon_types: proteinIcon, text_type: "Proteines" },
  //   { icon_types: carbohydrateIcon, text_type: "Glucides" },
  //   { icon_types: lipidIcon, text_type: "Lipides" },
  // ];

  const showTypes = nutriments.map((el, index) => {
    return (
      <CardInfos
        key={index}
        text_type={el.text_type}
        icon_type={el.icon_type}
        value={values[index]}
      />
    );
  });

  useEffect(() => {
    /**
     * récupérer les données des deux utilisateurs
     * Retrieves all data using a mocked API endpoint.
     *@return {Promise} A promise that resolves with the data response.
     */
    async function getMockedData() {
      try {
        const userData = await getAllDataMocked();

        setState({
          ...state,
          data: userData,

          error: "",
          isLoading: false,
        });
      } catch (error) {
        setState({ ...state, error: error, isLoading: false });
      }
    }
    getMockedData();
  }, []);
  if (isLoading) return <p> loading...</p>;
  return (
    <>
      <h1>SportResultsTraining</h1>;
      <div className="container_profil_user">
        <header>
          <h1>bonjour {firstName}</h1>
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
