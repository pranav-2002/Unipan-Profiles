import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import DesignerDoors from "./components/DesignerDoors";
import Cupboards from "./components/Cupboards";
import Reviews from "./components/Reviews";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
          <Features />
        </Route>
        <Route path="/plain doors">
          <Services heading="Checkout Our Wide Range Of Plain Doors" />
          <Footer />
        </Route>
        <Route path="/designer doors">
          <DesignerDoors />
          <Footer />
        </Route>
        <Route path="/cupboards">
          <Cupboards />
        </Route>
        <Route path="/about">
          <About />
          <Footer />
        </Route>
        <Route path="/contact">
          <Navbar />
          <Hero text="CONTACT US" />
          <Contact />
          <Footer />
        </Route>
        <Route path="/reviews">
          <Navbar />
          <Hero text="  CUSTOMER REVIEWS" />
          <Reviews />
          <Footer />
        </Route>
        <Route to="*">
          <Navbar />
          <Hero text="404 Error" />
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
