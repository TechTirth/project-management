import NewProjects from "./components/NewProjects";
import ProjectsSidebars from "./components/ProjectsSidebars";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebars />
      <NewProjects />
    </main>
  );
}

export default App;
