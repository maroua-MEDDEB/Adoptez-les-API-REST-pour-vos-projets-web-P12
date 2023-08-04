import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import NavBarH from './components/NavBarH/NavBarH';

const App = () => {
  return (
    <>
    <NavBarH />
    {/* définir les différens routages */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </>
  );
}

export default App;
