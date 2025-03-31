import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { client } from "../client";

export const AppContext = createContext();

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
