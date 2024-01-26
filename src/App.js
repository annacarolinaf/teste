import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from '.src/components/page1.js';
import Page2 from '.src/components/page2.js';
import Page3 from '.src/components/spage3.js';
import Final from '.src/components/final-page.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/final-page" component={Final} />
      </Switch>
    </Router>
  );
};


export default App;

