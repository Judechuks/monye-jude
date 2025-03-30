import PropTypes from "prop-types";
import { Company, Location, Hourglass } from "../assets/icons/svgIcons";

const ExperienceCard = ({
  id,
  company,
  location,
  type,
  position,
  period,
  description,
  skills,
  bgcolor,
}) => {
  return (
    <article className="group min-[850px]:w-[50%] dark:before:border-white relative">
      <div className="card py-6 px-5 rounded-lg border-2 border-text-gray relative overflow-hidden transition duration-500 cursor-pointer">
        <h4 className="font-bold text-md mb-3">{position}</h4>
        <header className="relative grid gap-1 text-slate-gray dark:text-white-400">
          <span className="flex items-center gap-3 border-slate-gray p-[6px]">
            <div className="size-5 -ml-2">
              <Company />
            </div>
            <p className="font-semibold text-sm">{company}</p>
          </span>
          <span className="flex items-center gap-3 border-slate-gray p-[6px]">
            <div className="size-5 -ml-2">
              <Location />
            </div>
            <p className="font-semibold text-sm">{location}</p>
          </span>
          <span className="flex items-center gap-3 border-slate-gray p-[6px]">
            <div className="size-5 -ml-2">
              <Hourglass />
            </div>
            <p className="font-semibold text-sm">{type}</p>
          </span>
        </header>
        <section className="my-3">
          <h4 className="font-bold text-slate-gray dark:text-white-400">
            {period}
          </h4>
          <p className="text-slate-gray dark:text-white-400 leading-6 mt-2">
            {description}
          </p>
        </section>
        <footer className="flex gap-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="min-w-12 text-center px-2 py-1 border border-slate-gray rounded-lg hover:bg-slate-gray"
            >
              {skill}
            </span>
          ))}
        </footer>
        {/* Overlay background effect */}
        <div
          className={`overlay-bg absolute top-0 left-0 bottom-0 right-0 rounded-full scale-0 duration-500 ${bgcolor} group-hover:opacity-0`}
        ></div>
      </div>
      {/* circle */}
      <div className={`circle size-8 absolute rounded-full bg-blue-400`}>
        <span className="font-semibold bg-white dark:bg-body-clr">{id}</span>
      </div>
    </article>
  );
};
export default ExperienceCard;

ExperienceCard.propTypes = {
  id: PropTypes.node.isRequired,
  company: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  position: PropTypes.node.isRequired,
  period: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  skills: PropTypes.node.isRequired,
  bgcolor: PropTypes.node.isRequired,
};

{
  /* Design 1: hover for info */
  /* <article className="group py-6 overflow-hidden relative rounded-lg border-2 border-text-gray p-3 transition duration-500 cursor-pointer flex gap-2 max-[400px]:flex-col">
      <img src={logo} alt={company} className="w-20 h-12" />
      <aside className="flex-1 grid gap-2">
        <header>
          <h4 className="font-bold text-md">{position}</h4>
          <div className="relative flex gap-1 my-3">
            <span className="info-container size-8 border border-slate-gray p-[6px] rounded-lg hover:bg-slate-gray">
              <Company />
              <p className="info hidden font-semibold text-sm absolute left-0 -bottom-6 border px-1 bg-white dark:bg-black border-slate-gray rounded-lg">
                {company}
              </p>
            </span>
            <span className="info-container size-8 border border-slate-gray p-[6px] rounded-lg hover:bg-slate-gray">
              <Location />
              <p className="info hidden font-semibold text-sm absolute left-0 -bottom-6 border px-1 bg-white dark:bg-black border-slate-gray rounded-lg">
                {location}
              </p>
            </span>
            <span className="info-container size-8 border border-slate-gray p-[6px] rounded-lg hover:bg-slate-gray">
              <Hourglass />
              <p className="info hidden font-semibold text-sm absolute left-0 -bottom-6 border px-1 bg-white dark:bg-black border-slate-gray rounded-lg">
                {type}
              </p>
            </span>
          </div>
        </header>
        <section>
          <h4 className="font-bold text-slate-gray">{period}</h4>
          <p className="text-slate-gray leading-6 mt-2">{description}</p>
        </section>
        <footer className="flex gap-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="min-w-12 text-center px-2 py-1 border border-slate-gray rounded-lg hover:bg-slate-gray ">
              {skill}
            </span>
          ))}
        </footer>
      </aside>
    </article> */
}
