import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <h3>Contact Me</h3>
          <form>
            <div className="my-3">
              <label className="form-label" for="name">
               <h4>Name</h4> 
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="my-3">
              <label className="form-label" for="email">
              <h4>Email</h4> 
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="my-3">
              <label className="form-label" for="message">
              <h4>Message</h4> 
              </label>
              <input
                type="text"
                className="form-control"
                id="message"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
