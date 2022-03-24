import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { Main } from "./component/Main";
import { Contact } from "./component/Contact";
import { About } from "./component/About";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <div className="buttons">
        <Contact />
        <About />
      </div>
    </div>
  );
}

export default App;
