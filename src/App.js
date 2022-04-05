import "./App.css";
import { Navbar } from "./component/Navbar";
import { Main } from "./component/Main";
import { Contact } from "./component/Contact";
import { About } from "./component/About";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Navbar />
        <Main />
        <Contact />
        <About />
      </Container>
    </div>
  );
}

export default App;
