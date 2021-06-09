import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
