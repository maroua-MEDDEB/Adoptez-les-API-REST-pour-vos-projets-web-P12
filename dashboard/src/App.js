import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import NavBarH from './components/NavBarH/NavBarH';
import NavBarV from './components/NavBarV/NavBarV';

const App = () => {
  return (
    <>
    <NavBarH />
    <NavBarV />
    {/* définir les différens routages */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </>
  );
}

export default App;
