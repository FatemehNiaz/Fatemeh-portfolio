import "./Footer.css";

const Footer = () => {
  return (
    <footer id="Footer" className="text-center p-5">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <h3>Contact</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <a href="https://github.com/FatemehNiaz">Github Project Link</a>
        </div>
        <div className="col-sm-4">
          <a href="mailto:fatemehniazi62@gmail.com">Fatemehniazi62@gmail.com</a>
        </div>
        <div className="col-sm-4">
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
