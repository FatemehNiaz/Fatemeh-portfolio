import "./Work.css";
import { projects } from "../../projects";
import Project from "../Project/Project";
import uniqid from "uniqid";

const Work = () => {
  if (!projects.length) return null;
  return (
    <div id="Work">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <h3>Work</h3>
        </div>
      </div>
      {projects.map((project) => (
        <Project key={uniqid()} project={project} />
      ))}
    </div>
  );
};
export default Work;
