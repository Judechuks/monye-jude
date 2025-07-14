import { useEffect, useState } from "react";
import { SkillCard } from "../components";
import { otherSkills, skills as myskills } from "../constants";
import { client } from "../client";
import { AppWrap } from "../wrapper";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  console.log("skills:", skills);

  useEffect(() => {
    // const query = '*[_type == "skills"]';
    // client.fetch(query).then((data) => setSkills(data));
    setSkills(myskills);
  }, []);

  return (
    <section className="pt-24 pb-10">
      <h1 className="section-title">Skills</h1>
      <div className="section-underline"></div>
      <article className="grid max-[380px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </article>
      <article className="">
        <h2 className="my-5 text-3xl max-sm:text-lg font-bold">Other Skills</h2>
        <ul className="grid max-[380px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-3">
          {otherSkills.map((skill) => (
            <li key={skill.id} className="before:content-['\2714'] before:mr-2">
              {skill.title}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
const WrappedApp = AppWrap(Skills, "skills");
export default WrappedApp;
