
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <Router>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
        <Switch>
          <Route exact path="/"/>
          <Route path="/women" component={Layout}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
