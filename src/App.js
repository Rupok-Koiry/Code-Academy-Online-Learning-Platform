import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About,";
import Courses from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    /* Route definition */
    <Layout>
      <Switch>
        {/* Home  page path */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* Not found page path */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
