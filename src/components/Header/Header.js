import "./Header.css";
import Navigation from "../Navigation/Navigation";


const Header= ()=>{
  return(
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">Fatemeh Niaziorimi</a>
          <br />
          <img src=".fatemehpic.jpg" />
        </div>
        <Navigation />
      </div>
    </nav>
  );
};


export default Header;