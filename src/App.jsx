import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebars from "./components/ProjectsSidebars";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebars
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
