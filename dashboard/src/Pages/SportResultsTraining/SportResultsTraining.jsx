import { useParams } from "react-router-dom";
import CardInfos from "../../components/CardInfos/CardInfos";

import { useState, useEffect } from "react";
import { getAllDataMocked } from "../../service/mockedAPI";
import { User } from "../../model/User";
import ScoreUser from "../../components/ScoreUser/ScoreUser";
import { Score } from "../../model/Score";
import "./SportResultsTraining.css";
import { SessionDuration } from "../../components/SessionDuration/SessionDuration";
import ActivityDays from "../../components/AcivityDays/ActivityDays";

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

  //userData
  const user = new User(userId, mockedData, false);
  const firstName = user?._firstName || "l'utilisateur est inconnu";

  const { nutriments, values } = new User(
    userId,
    mockedData?.userMainData,
    false
  )._keyData;
  // console.log(nutriments);

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
      <div className="container_profil_user">
        <header>
          <div className="header_title">
            <h1>Bonjour</h1>
            <h1 className="nameUser">{firstName}</h1>
          </div>

          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </header>
        <section className="section_infos">
          <div className="items_activity_sport">
            <div className="item_activity">
              <ActivityDays />
            </div>
            <div className="items_measure">
              <SessionDuration userId={userId} data={mockedData} api={false} />
              <div>coucou</div>
              <ScoreUser userId={userId} data={mockedData} api={false} />
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
