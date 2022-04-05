import "./App.css";
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { Contact } from "./component/Contact";
import { About } from "./component/About";
import { Container } from "react-bootstrap";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Container>
        <Skills />
        <Projects />
        <About />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
