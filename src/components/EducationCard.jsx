import { companyAlt } from "../assets/icons";
import { urlFor } from "../client";

const EducationCard = ({
  id,
  imageurl = companyAlt,
  certification,
  institution,
  location,
  period,
  skills,
  bgcolor,
}) => {
  return (
    <article className="group min-[850px]:w-[50%] dark:before:border-white relative">
      <div className="card py-6 px-3 rounded-lg border-2 border-text-gray relative overflow-hidden transition duration-500 cursor-pointer">
        <header className="mb-4">
          <img src={urlFor(imageurl)} alt={institution} className="w-20 h-12" />
        </header>
        <section className="mb-4">
          <h4 className="font-bold text-slate-gray dark:text-white-400">
            {certification}
          </h4>
          <h5 className="text-slate-gray dark:text-white-400 leading-6 my-2">
            {institution}
          </h5>
          <h6 className="font-semibold text-slate-gray dark:text-white-400">
            {location} - {period}
          </h6>
        </section>
        <footer className="flex flex-wrap gap-1">
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
export default EducationCard;
