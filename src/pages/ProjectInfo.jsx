import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Attachment, Github } from "../assets/icons/svgIcons";
import { useGlobalContext } from "../context";
import { urlFor } from "../client";
// import { projects } from "../constants";

const ProjectInfo = () => {
  const { id } = useParams();

  const { projects } = useGlobalContext();
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
    setSelectedProject(projects.find((project) => project.id === parseInt(id)));
  }, []);
  console.log(selectedProject);

  const {
    title,
    link,
    githubLink,
    date,
    description,
    skillIcons,
    skills,
    photoGallery,
  } = selectedProject;

  return (
    <section className="pt-20 pb-10 max-w-sm sm:max-w-2xl mx-auto">
      <h1 className="section-title">{title}</h1>
      <div className="section-underline"></div>
      {/* Project Links */}
      <div className="flex justify-center gap-2 font-semibold">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 border rounded-md p-2 hover:bg-stone-500">
          <div className="size-6">{<Attachment />}</div>
          <p>View Live</p>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 border rounded-md p-2 hover:bg-stone-500">
          <div className="size-6">{<Github />}</div>
          <p>Github</p>
        </a>
      </div>

      {/* Skills */}
      <div className="flex my-6 gap-3 flex-wrap capitalize">
        {skills?.map((skill, index) => (
          <p
            className="flex gap-2 items-center text-center px-2 py-1 border border-slate-gray rounded-lg hover:bg-slate-gray"
            key={index}>
            <img src={urlFor(skillIcons[index])} alt={skill} className="w-5" />
            {skill}
          </p>
        ))}
      </div>

      {/* Photo Gallery */}
      <div className="photo-gallery mx-auto grid gap-3 grid-col-1 sm:grid-cols-2">
        {photoGallery?.map((photo, index) => (
          <div key={index}>
            <img
              src={urlFor(photo)}
              alt={`project thumbnail ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>

      {/* Project Description */}
      <div className="mt-6">
        <h2 className="font-semibold text-xl mb-3">Description</h2>
        <p>{description}</p>
      </div>
      <Link
        to="/#projects"
        className="block w-fit mt-5 px-4 py-2 font-semibold border-2 border-blue-800 rounded bg-blue-800 text-white hover:bg-transparent hover:text-slate-gray dark:hover:text-white duration-300">
        Go Back
      </Link>
    </section>
  );
};
export default ProjectInfo;
