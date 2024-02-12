import { NavigationDots } from "../components";

// Higher Order Component (HOC)
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <section
        id={idName}
        className={`app-container pt-12 flex w-full items-center ${classNames}`}>
        {/* The whole contents or components at the Middle */}
        <main className="app-wrapper flex-1">
          <Component />
        </main>
        {/* Navigation Dots on the Right Hand Side */}
        {/* <NavigationDots active={idName} /> */}
      </section>
    );
  };
export default AppWrap;
