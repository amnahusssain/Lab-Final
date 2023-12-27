import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/dragons">
            <Dragons />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
