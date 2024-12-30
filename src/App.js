import React from 'react';
import './App.css';
import ErrorBoundary from './pages/errorPage';
import MainRouter from './router/mainRouter';
import NavBar from './components/navbar';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <NavBar />
        <Box mt={8}>
          <MainRouter />
        </Box>
      </ErrorBoundary>
    </div>
  );
}

export default App;
