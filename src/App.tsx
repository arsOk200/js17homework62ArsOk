import React from 'react';
import NavBar from "./Components/Nav-Bar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home/Home";
import AboutUs from "./Containers/About-us/AboutUs";
import Contacts from "./Containers/Contacts/Contacts";
import Portfolio from "./Containers/Portfolio/Portfolio";


function App() {
  return (
    <>
     <header>
       <NavBar/>
     </header>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path='/about-us' element={(
          <AboutUs/>
        )}/>
        <Route path='/contacts' element={(
          <Contacts/>
        )}/>
        <Route path='/portfolio' element={(
          <Portfolio/>
        )}/>
        <Route path='*' element={(
        <h1>Not found!</h1>
      )}/>
      </Routes>
    </>
  );
}

export default App;
