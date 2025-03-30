import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./sections";

const Layout = () => {
  const [theme, setTheme] = useLocalStorageState("@jayTheme", {
    defaultValue: "light",
  });

  // To set the theme at the initial render
  const html = document.querySelector("html");
  useEffect(() => {
    if (theme === "dark") {
      html.classList.add("dark");
    }
  }, [theme, html]);

  // html.style.colorScheme = theme;

  const handleThemeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
    // const newTheme = theme === "light" ? "dark" : "light";
    // setTheme(newTheme);
  };

  return (
    <>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
