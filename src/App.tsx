import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Index from './components/Index';
import Homepage from './components/Homepage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/Homepage" component={Homepage} />
      </Switch>
    </Router>
  );
}
