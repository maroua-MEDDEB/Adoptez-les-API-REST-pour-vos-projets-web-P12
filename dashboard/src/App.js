import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SportResultsTraining from "../src/components/SportResultsTraining/SportResultsTraining";
import NavBarH from "./components/NavBarH/NavBarH";
import NavBarV from "./components/NavBarV/NavBarV";

const App = () => {
  return (
    <>
      <NavBarH />
      <NavBarV />
      {/* définir les différens routages */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/sportResults/:id"
          element={<SportResultsTraining />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
