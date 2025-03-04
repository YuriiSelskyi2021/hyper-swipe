import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
