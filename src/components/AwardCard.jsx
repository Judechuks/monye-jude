import { Company, Hourglass, Location } from "../assets/icons/svgIcons";

const AwardCard = ({
  institution,
  title,
  by,
  location,
  date,
  description,
  bgcolor,
}) => {
  return (
    <article className="w-full mb-12 md:w-[70%] md:mx-auto flex flex-col justify-between group overflow-hidden relative rounded-lg border-2 p-5 transition duration-500 cursor-pointer hover:shadow-navbar">
      <header>
        <h4 className="font-bold text-md mb-3">{title}</h4>
        <div className="relative grid gap-1 text-slate-gray">
          <span className="flex items-center gap-3 border-slate-gray p-[6px]">
            <div className="size-5 -ml-2">
              <Company />
            </div>
            <p className="font-semibold text-sm">{institution}</p>
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
            <p className="font-semibold text-sm">{date}</p>
          </span>
        </div>
      </header>
      <section className="flex-1 my-3">
        <p className="text-slate-gray leading-6 mt-2">{description}</p>
      </section>
      <footer>
        <p className="font-semibold text-slate-gray">Presented By: {by}</p>
      </footer>
      {/* Overlay background effect */}
      <div
        className={`overlay-bg absolute top-0 left-0 bottom-0 right-0 rounded-full scale-0 duration-500 ${bgcolor} group-hover:opacity-0`}></div>
    </article>
  );
};

export default AwardCard;
