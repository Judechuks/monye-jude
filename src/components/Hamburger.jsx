const Hamburger = ({ isOpen }) => {
  return (
    <div className="size-8 p-1 rounded-full border border-black dark:border-white grid items-center">
      <div
        className={`bar -translate-y-1.5 w-full h-1 rounded-full before:h-1 after:h-1 before:translate-y-1.5 after:translate-y-2 bg-black dark:bg-white ${
          isOpen && "before:w-2/3 after:w-1/2"
        }`}></div>
    </div>
  );
};
export default Hamburger;
