import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components";
import { useGlobalContext } from "../context";
import { AppWrap } from "../wrapper";
// import { projects } from "../constants";

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
            } p-1 border rounded-md uppercase text-sm cursor-pointer hover:bg-blue-800 hover:text-white duration-500`}>
            {item}
          </p>
        ))}
      </article>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {portfolioProjects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={index}>
            <ProjectCard key={project.id} {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default AppWrap(Projects, "projects");
