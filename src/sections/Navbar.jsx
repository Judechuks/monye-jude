import { useState } from "react";
import PropTypes from "prop-types";
import { Logo, Hamburger } from "../components";
import { navLinks } from "../constants";
import { Moon, Sun } from "../assets/icons/svgIcons";

const Navbar = ({ handleThemeSwitch, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 inset-0 bottom-auto bg-white text-black dark:bg-body-clr dark:text-white backdrop-blur-[40px] shadow-navbar transition-all duration-300">
      <div className="max-container flex justify-between">
        <a href="/" className="block p-3 hover:bg-stone-500">
          <Logo />
        </a>
        <nav
          className={`nav-menu flex-1 mobile:flex fixed top-[46px] left-0 right-0 transition-all duration-300 overflow-hidden h-0 mobile:h-fit mobile:static bg-white dark:bg-body-clr ${
            isOpen && "max-mobile:h-96"
          }`}
        >
          <ul className="mobile:flex mobile:w-fit mx-auto">
            {navLinks.map((navLink, index) => (
              <li key={index} className="">
                <a
                  href={navLink.href}
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 p-3 capitalize hover:bg-stone-500"
                >
                  <div className="w-4 h-4">
                    <navLink.iconUrl />
                  </div>
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hover:bg-stone-500 p-2 cursor-pointer flex gap-2 items-center"
            onClick={() => {
              setIsOpen(!isOpen);
              handleThemeSwitch();
            }}
          >
            <div className="w-5 h-5">
              {theme === "dark" ? <Moon /> : <Sun />}
            </div>
            <p className="mobile:hidden">Theme</p>
          </div>
        </nav>
        {/* Hamburger */}
        <div
          className="mobile:hidden cursor-pointer grid place-content-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// Proptypes
Navbar.propTypes = {
  handleThemeSwitch: PropTypes.node.isRequired,
  theme: PropTypes.node.isRequired,
};
