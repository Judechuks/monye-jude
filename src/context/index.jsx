import { useEffect, useState, createContext, useContext } from "react";
import { client } from "../client";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => {
      setProjects(data);
      setPortfolioProjects(data);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        projects,
        portfolioProjects,
        setPortfolioProjects,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
