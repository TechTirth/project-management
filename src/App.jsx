import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebars from "./components/ProjectsSidebars";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebars />
      <NoProjectSelected />
    </main>
  );
}

export default App;
