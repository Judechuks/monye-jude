import { navLinks } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="grd gap-1">
      {navLinks.map((navLink, index) => (
        <a
          href={navLink.href}
          key={index}
          className={`${
            active === navLink.label && "bg-blue-800"
          } block size-4 lg:size-5 m-3 rounded-full border-2 border-slate-gray cursor-pointer hover:bg-blue-800 transition-all duration-300`}
        />
      ))}
    </div>
  );
};
export default NavigationDots;
