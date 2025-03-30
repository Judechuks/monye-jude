import PropTypes from "prop-types";
import { socialMedia } from "../constants";

const SocialMedia = ({ col }) => {
  return (
    <article className={`flex ${col && "flex-col"} gap-4 mt-6`}>
      {socialMedia.map((icon, index) => (
        <a href={icon.link} key={index}>
          <div
            className={`flex justify-center items-center w-9 h-9 bg-blue-400 rounded-full transition-transform hover:-translate-y-1 duration-500`}
          >
            {icon.faName}
          </div>
        </a>
      ))}
    </article>
  );
};
export default SocialMedia;

SocialMedia.propTypes = {
  col: PropTypes.node.isRequired,
};
