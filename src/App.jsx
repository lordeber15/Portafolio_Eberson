import "./App.module.css";
import NavBar from "./components/navBar/navBar";
import Home from "./view/home/home";
import About from "./view/sectionAbout/about";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
