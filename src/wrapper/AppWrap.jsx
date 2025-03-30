// import { NavigationDots } from "../components";

// Higher Order Component (HOC)
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <section
        id={idName}
        className={`app-container relative pt-12 flex w-full items-center ${classNames}`}
      >
        {/* blob 1 */}
        <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl opacity-10 overflow-hidden rounded-full"></div>
        {/* blob 2 */}
        <div className="w-80 h-80 bg-color-secondary absolute bottom-10 right-0 -z-10 blur-2xl opacity-10 overflow-hidden rounded-full"></div>
        <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        {/* blob 2 */}
        <div className="w-80 h-80 bg-color-secondary absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
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
