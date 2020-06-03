import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Single from "./pages/Single";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/single" component={Single} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/service" component={Service} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
