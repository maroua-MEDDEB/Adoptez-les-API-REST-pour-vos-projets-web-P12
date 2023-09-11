import { useParams } from "react-router-dom";
import CardInfos from "../../components/CardInfos/CardInfos";
import {
  ContainerProfilUser,
  HeaderTitle,
  NameUser,
  SectionInfos,
  Item_activity,
  ItemsActivitySport,
  GridCards,
  CardInformations,
  ItemsMeasure,
} from "./index.style";
import { useState, useEffect } from "react";
import { getAllDataMocked } from "../../service/mockedAPI";
import { User } from "../../model/User";
import ScoreUser from "../../components/ScoreUser/ScoreUser";
import { Score } from "../../model/Score";
import { SessionDuration } from "../../components/SessionDuration/SessionDuration";

const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
};

function SportResultsTraining() {
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
      <ContainerProfilUser>
        <header>
          <HeaderTitle>
            <h1>Bonjour</h1>
            <NameUser>{firstName}</NameUser>
          </HeaderTitle>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </header>

        <SectionInfos>
          <ItemsActivitySport>
            <Item_activity>
              <div>ActivityDays</div>
              {/* <ActivityDays userId={userId} data={mockedData} api={false} /> */}
            </Item_activity>
            <ItemsMeasure>
              <SessionDuration userId={userId} data={mockedData} api={false} />
              <div>RadarActivities</div>
              {/* <RadarActivities userId={userId} data={mockedData} api={false} /> */}
              <ScoreUser userId={userId} data={mockedData} api={false} />
            </ItemsMeasure>
          </ItemsActivitySport>
          <GridCards>
            <CardInformations>{showTypes}</CardInformations>
          </GridCards>
        </SectionInfos>
      </ContainerProfilUser>
    </>
  );
}

export default SportResultsTraining;
