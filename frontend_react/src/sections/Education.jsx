import { useEffect, useState } from "react";
import { EducationCard } from "../components";
import { client } from "../client";
import { AppWrap } from "../wrapper";
// import { education } from "../constants";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    client.fetch(query).then((data) => {
      setEducation(data);
    });
  }, []);

  return (
    <section className="pt-20 pb-10">
      <h1 className="section-title">Education</h1>
      <div className="section-underline"></div>
      <div className="relative card-container after:bg-slate-gray dark:after:bg-white mt-4">
        {education.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default AppWrap(Education, "education");
