import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project text-center">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <div className="card">
            <div className="card-header">{project.title}</div>
            <div className="card-body">
              <img className="w-100" src={project.image} alt={project.title} />
            </div>
              <div className="card-footer">
                <a href={project.appLink} className="btn btn-secondary mx-3">View App</a>
                <a href={project.githubLink} className="btn btn-secondary mx-3">View Code</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
