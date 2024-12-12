import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage';
import ExplorePage from '../pages/explorePage';
import GamePage from '../pages/gamePage';

function MainRouter() {
  return (
    <Switch>
      <Route path="/explore" render={() => <ExplorePage />} />
      <Route path="/:gameid" render={() => <GamePage />} />
      <Route path="/" render={() => <HomePage />} />
    </Switch>
  );
}

export default MainRouter;
