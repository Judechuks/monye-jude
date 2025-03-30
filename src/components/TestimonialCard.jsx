import { FaStar } from "react-icons/fa";
import { images, generateRating } from "../constants";
import { urlFor } from "../client";

const TestimonialCard = ({
  name,
  imageurl,
  position,
  feedback,
  rating,
  bgcolor,
}) => {
  return (
    <article
      className={`card w-full mb-12 md:w-[70%] md:mx-auto flex flex-col justify-between group overflow-hidden relative rounded-lg border-2 p-5 transition duration-500 cursor-pointer shadow-3xl hover:shadow-navbar`}
    >
      <header className="mt-2 pb-4 flex flex-wrap gap-4 items-center">
        <img
          src={urlFor(imageurl)}
          alt={name}
          className="size-20 rounded-full"
        />
        <div className="">
          <h2 className="font-bold text-lg capitalize">{name}</h2>
          <p className="font-bold mt-1 text-sm text-slate-gray dark:text-white-400">
            {position}
          </p>
        </div>
      </header>
      <section className="flex-1 my-5 pb-4 text-slate-gray dark:text-white-400">
        <p className="text-slate-gray dark:text-white-400">{feedback}</p>
      </section>
      <footer className="pb-4 flex gap-2">
        {generateRating(rating).map((item, index) => (
          <FaStar key={index} className="text-blue-400" />
        ))}
      </footer>
      {/* Overlay background effect */}
      <div
        className={`overlay-bg absolute top-0 left-0 bottom-0 right-0 rounded-full scale-0 duration-500 ${bgcolor} group-hover:opacity-0`}
      ></div>
    </article>
  );
};
export default TestimonialCard;
