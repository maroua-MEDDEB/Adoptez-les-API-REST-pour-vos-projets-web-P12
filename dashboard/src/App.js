import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SportResultsTraining from "./Pages/SportResultsTraining/SportResultsTraining";
import Error from "./Pages/Error/Error";
import NavBarHorizontal from "./components/NavBarHorizontal/NavBarHorizontal";
import NavBarVertical from "./components/NavBarVertical/NavBarVertical";

const App = () => {
  return (
    <>
      <NavBarHorizontal />
      <NavBarVertical />
      {/* définir les différens routages */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/sportResults/:userId"
          element={<SportResultsTraining />}
        ></Route>
        <Route
          path="/sportResults/:userId/:api"
          element={<SportResultsTraining />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
