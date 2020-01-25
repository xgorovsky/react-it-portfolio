import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./RWD.scss";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
              <img
                src="https://miistudio.com.mx/wp-content/uploads/2019/11/pacenos-thumbnail-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
