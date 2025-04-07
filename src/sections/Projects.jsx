import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components";
import { useGlobalContext } from "../context/globalContext";
import { AppWrap } from "../wrapper";
// import { projects } from "../constants";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Projects = () => {
  let skills = [];
  const [active, setActive] = useState("all");

  const { projects, portfolioProjects, setPortfolioProjects } =
    useGlobalContext();

  projects.map((project) => project.skills.map((item) => skills.push(item)));
  skills = ["all", ...new Set(skills)];

  const filterSkills = (text) => {
    if (text === "all") {
      setPortfolioProjects(projects);
      return;
    }
    setPortfolioProjects(
      // portfolioProjects.filter((project) => project.skills.includes(text))
      projects.filter((project) => project.skills.includes(text))
    );
  };

  return (
    <section className="pt-20 pb-10">
      <h1 className="section-title">Projects</h1>
      <div className="section-underline"></div>
      <article className="flex gap-3 mb-12 flex-wrap">
        {skills.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              filterSkills(item);
              setActive(item);
            }}
            className={`${
              item == active && "bg-blue-800 text-white "
            } p-1 border rounded-md uppercase text-sm cursor-pointer hover:bg-blue-800 hover:text-white duration-500`}
          >
            {item}
          </p>
        ))}
      </article>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {portfolioProjects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={index}>
            <Tilt options={defaultOptions}>
              <ProjectCard key={project.id} {...project} />
            </Tilt>
          </Link>
        ))}
      </div>
    </section>
  );
};
const WrappedApp = AppWrap(Projects, "projects");
export default WrappedApp;
