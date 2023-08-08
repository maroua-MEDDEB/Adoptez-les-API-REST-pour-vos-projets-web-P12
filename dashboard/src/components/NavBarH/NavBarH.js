import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const NavBarH = () => {
  return (
    <>
    <div className="navBarH">
      <div className="navBarH_img">
        <img src={logo} alt="" />
      </div>
      <div className="navBarH_list">
        <Link to={'/'}>Accueil</Link>
        <Link to={'/profil'}>Profil</Link>
        <Link to={'/réglage'}>Réglage</Link>
        <Link to={'/communauté'}>Communauté</Link>
      </div>
    </div>
    </>
  )
}

export default NavBarH