import React from 'react';
import Navbar from './components/Navbar';
import {Routes,Route,Navigate} from "react-router-dom"
import HomePage from './pages/HomePage';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <div>
      <Navbar/>
        <AppRoutes/>
      </div>
  );
};

export default App;
