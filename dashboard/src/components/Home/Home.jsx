import { Profil, SportResultsTraining } from "..";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { getAllDataMocked } from "../../service/mockedAPI";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

function Home() {
  const [state, setState] = useState(initialState);
  const { data, isLoading } = state;

  useEffect(() => {
    /**
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
        setState({ ...state, error, isLoading: false });
      }
    }
    getMockedData();
  }, []);

  return (
    //page intermédiaire vers la page d'utilisateur
    <>
      <div className="home">
        <span>Bienvenue!</span>
        <div className="containerHome">
          {data?.userMainData?.map((element, index) => (
            <Profil
              key={index}
              userId={element.userInfos.userId}
              userInfos={element.userInfos}
              imageSrc={`/images/${element.userInfos.firstName}.png`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
