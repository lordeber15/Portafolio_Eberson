import "./App.module.css";
import NavBar from "./components/navBar/navBar";
import Home from "./view/home/home";
import About from "./view/sectionAbout/about";
import Experiencia from "./view/sectionExperiencia/experiencia";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experiencia />
    </div>
  );
}

export default App;
