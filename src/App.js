import React from 'react';
import './App.css';

// IMPORTING COMPONENTS
import NavBar from './Components/NavBar/NavBar';
import MainNav from './Components/MainNav/MainNav';
import Body from './Components/Body/Body';
import SideNav from './Components/SideNav/SideNav';



function App() {
  return (
    <div className="app">
      <NavBar />
      <MainNav />
      <SideNav />
      <Body />
    </div>
  );
}

export default App;
