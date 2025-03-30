import { images } from "../constants";
import { FaEye } from "react-icons/fa";
import { AppWrap } from "../wrapper";
import { useEffect, useState } from "react";
import { client, urlFor } from "../client";

export const Hero = () => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    const query = '*[_type == "hero"]';
    client.fetch(query).then((data) => {
      setHero(...data);
    });
  }, []);

  return (
    <section
      // id="home"
      className="pt-8 pb-10 flex flex-col gap-10 sm:flex-row justify-between items-center"
    >
      {/* LEFT COLUMN */}
      <article className="max-sm:text-center sm:basis-1/2">
        <h4 className="text-slate-gray dark:text-gray-300">
          Hi! Welcome to my portfolio
        </h4>
        <h2 className="font-bold text-3xl leading-8 my-3">
          I&apos;m {hero?.name}
        </h2>
        <p className="leading-6 text-slate-gray dark:text-gray-300">
          {hero?.msg}
        </p>
        <h4 className="text-slate-gray">Hi! Welcome to my portfolio</h4>
        <h2 className="font-bold text-3xl leading-8 my-3">
          I&apos;m {hero?.name}
        </h2>
        <p className="leading-6 text-slate-gray">{hero?.msg}</p>
        <a
          // href={images.cv}
          href={hero?.cv_link}
          target="_blank"
          rel="noreferrer"
          className="w-fit max-sm:mx-auto flex gap-3 items-center border rounded-lg px-4 py-1 mt-4 font-semibold  bg-blue-800 text-white hover:border-blue-800 hover:bg-transparent hover:text-blue-800 dark:hover:border-white dark:hover:text-white duration-300"
        >
          <FaEye /> My C.V
        </a>
      </article>
      {/* RIGHT COLUMN */}
      <article className="basis-1/4 w-64 sm:min-w-64 rounded-full border bg-slate-900 border-black">
        <img
          src={hero.imageurl ? urlFor(hero.imageurl) : images.heroImg}
          alt="photo"
          className="hero-pic w-full rounded-full p-2 cursor-pointer transition-background duration-500"
        />
      </article>
    </section>
  );
};
const WrappedHero = AppWrap(Hero, "home");
export default WrappedHero;
