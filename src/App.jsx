import { Routes, Route } from "react-router-dom";
import ProjectInfo from "./pages/ProjectInfo";
import Missing from "./pages/Missing";
import Layout from "./Layout";
import PageSections from "./PageSections";
import AppProvider from "./context";

function App() {
  return (
    <main className="max-container relative sm:px-8 font-montserrat dark:bg-color-primary dark:text-white">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageSections />} />
            <Route path="/project/:id" element={<ProjectInfo />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </AppProvider>
    </main>
  );
}

export default App;
