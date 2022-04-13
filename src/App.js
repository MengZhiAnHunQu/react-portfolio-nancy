import "./App.css";
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { Contact } from "./component/Contact";
import { About } from "./component/About";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";

function App() {
  return (
    <div className="wrapper">
      <div className="top-section">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-light">
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
