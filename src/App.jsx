import "./App.module.css";
import NavBar from "./components/navBar/navBar";
import Home from "./view/home/home";
import About from "./view/sectionAbout/about";
import Experiencia from "./view/sectionExperiencia/experiencia";
import Skills from "./view/SectionSoftSkils/skills";
import Portafolio from "./view/selectPortafolio/portafolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experiencia />
      <Skills />
      <Portafolio />
    </div>
  );
}

export default App;
