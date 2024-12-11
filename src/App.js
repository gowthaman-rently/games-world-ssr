import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigninPage from './pages/signinPage';
import AppPage from './pages/appPage';
import HomePage from './pages/homePage';
import GamePage from './pages/gamePage';
import ExplorePage from './pages/explorePage';
import ErrorBoundary from './pages/errorPage';


class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <ErrorBoundary>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<AppPage />}>
                      <Route index element={<HomePage/>}/>
                      <Route path="/explore" element={<ExplorePage/>}/>
                      <Route path="/:gameid" element={<GamePage/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );

  }
}
 
export default App;
