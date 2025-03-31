import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { urlFor } from "../client";
import { icons } from "../constants";

const ProjectCard = ({
  title,
  imageurl = icons.companyAlt,
  date,
  description,
  skillIcons,
  bgcolor,
}) => {
  return (
    <article
      className={`card group overflow-hidden relative rounded-lg border-2 border-text-gray p-3 duration-500 cursor-pointer`}
    >
      <img
        src={urlFor(imageurl)}
        alt="project thumbnail"
        className="w-20 h-16 duration-500 text-inherit bg-inherit"
      />
      <header className="mt-2 pb-4 border-b-2">
        <h2 className="font-bold text-lg sm:text-xl capitalize">{title}</h2>
      </header>
      <section className="flex-1 my-6 pb-4 border-b-2 text-slate-gray dark:text-white-400">
        <ReactMarkdown className="">
          {description.substring(0, 101) + "..."}
        </ReactMarkdown>
        <h4 className="mt-4">{date}</h4>
      </section>
      <footer className="pb-4 flex gap-2">
        {skillIcons.map((skillsIcon, index) => (
          <div
            key={index}
            className="w-8 h-8 border rounded-md p-1 hover:bg-stone-500"
          >
            <img src={urlFor(skillsIcon)} className="w-full" />
          </div>
        ))}
      </footer>
      {/* Overlay background effect */}
      <div
        className={`overlay-bg absolute top-0 left-0 bottom-0 right-0 rounded-full scale-0 duration-500 ${bgcolor} group-hover:opacity-0`}
      ></div>
    </article>
  );
};
export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.node.isRequired,
  imageurl: PropTypes.object.isRequired,
  date: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  skillIcons: PropTypes.array.isRequired,
  bgcolor: PropTypes.node.isRequired,
};
