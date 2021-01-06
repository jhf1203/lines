import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Main from "./pages/Main"
import LakeNorman from "./pages/LakeNorman"
import Quorum from "./pages/Quorum"

function App() {
  return (
    <div className="App">
      <Router basename="/lines">
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/lakenorman" component={LakeNorman} />
        <Route exact path="/quorum" component={Quorum} />
      </div>
    </Router>
    </div> 
  )   
}

export default App;
