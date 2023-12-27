// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dragons" component={Dragons} />
        <Route path="/missions" component={Missions} />
        <Route path="/myprofile" component={MyProfile} />
      </Switch>
    </Router>
  );
};

export default App;
