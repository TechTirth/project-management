import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebars from "./components/ProjectsSidebars";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  let content;

  if (projectState.selectedProjectId === null){
    content = <NewProjects/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

    return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebars onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    );
}

export default App;
