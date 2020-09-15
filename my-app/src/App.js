import React from 'react';
import './App.css';
import Cards from './components/cards'
import {BrowserRouter, Route} from "react-router-dom"
import Resume from "./components/resume" 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/" component={Cards} />
      <Route exact path="/resume" component={Resume} />
    </BrowserRouter>
    </div>
  );
}

export default App;
