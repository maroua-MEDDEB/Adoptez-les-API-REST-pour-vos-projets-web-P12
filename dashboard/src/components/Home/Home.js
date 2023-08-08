import { Profil } from "../../components";
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
  // console.log(state.data);
  // userMainData[0].userInfos
  const getProfil = () => {
    return state.data?.userMainData.map((element) => {
      return (
        <Profil
          userId={element.userInfos.userId}
          userInfos={element.userInfos}
          imageSrc={`../../assets/images/${element.userInfos.firstName}.jpg}`}
        />
      );
    });
  };

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
  if (state.data === null) {
    return <p>loading</p>;
  }

  if (state.data?.userMainData?.userInfos)
    return (
      //page intermédiaire vers la page d'utilisateur
      <>
        <div className="informations">{getProfil()}</div>
      </>
    );
}

export default Home;
