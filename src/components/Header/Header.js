import "./Header.css";
import Navigation from "../Navigation/Navigation";


const Header= ()=>{
  return(
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Fatemeh Niaziorimi</a>
          <br />
          <img src="./fatemehpic.jpg" alt="My picture" />
        </div>
        <Navigation />
      </div>
    </nav>
  );
};


export default Header;