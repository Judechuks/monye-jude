import { useState, useEffect } from "react";
import { ExperienceCard } from "../components";
import { client } from "../client";
import { AppWrap } from "../wrapper";
// import { experiences } from "../constants";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';
    client.fetch(query).then((data) => setExperiences(data));
  }, []);

  return (
    <section className="pt-20 pb-10">
      <h1 className="section-title">Experiences</h1>
      <div className="section-underline"></div>
      <div className="relative card-container after:bg-slate-gray dark:after:bg-white mt-4">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};
const WrappedApp = AppWrap(Experiences, "experience");
export default WrappedApp;
