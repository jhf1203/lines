import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Main from "./pages/Main"
import LakeNorman from "./pages/LakeNorman"

function App() {
  return (
    <div className="App">
      <Router basename="/lines">
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/lakenorman" component={LakeNorman} />
      </div>
    </Router>
    </div> 
  )   
}

export default App;
