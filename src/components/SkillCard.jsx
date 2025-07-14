import PropTypes from "prop-types";
import { urlFor } from "../client";

const SkillCard = ({ skill, imageurl, bgcolor }) => {
  return (
    <div
      className={`${bgcolor} skills group relative z-30 cursor-pointer h-12 overflow-hidden transition-all duration-700`}
    >
      <p className="p-2 h-full bg-white-400 dark:bg-body-clr dark:text-white w-full absolute z-0">
        {skill}
      </p>
      <img
        // src={urlFor(imageurl)}
        src={imageurl}
        alt={"icon"}
        className="w-full h-12 absolute z-10 -top-1 -right-[45%] group-hover:-right-[42%] transition-all duration-700"
      />

      {/* Overlay background effect */}
      <div
        className={`${bgcolor} z-10 -top-1 rounded-full group-hover:w-full group-hover:opacity-30 absolute w-0 h-12 transition-all duration-500 opacity-100`}
      ></div>
    </div>
  );
};
export default SkillCard;

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  imageurl: PropTypes.object.isRequired,
  bgcolor: PropTypes.string.isRequired,
};
