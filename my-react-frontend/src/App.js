import React from "react";
import Header from "./views/header";
import Footer from "./views/footer";
import ProjectList from "./views/project_list";
import { useProjectViewModel } from "./viewmodels/project_viewmodel";
import "./app.css";

function App() {
  const { projects, error, loading } = useProjectViewModel();

  return (
    <div className="app">
      <Header />
      <main className="content">
        <h1>My Projects</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}

        <ProjectList projects={projects} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
