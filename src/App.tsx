import React from 'react';
import NavBar from "./Components/Nav-Bar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home/Home";
import AboutUs from "./Containers/About-us/AboutUs";
import Contacts from "./Containers/Contacts/Contacts";
import Portfolio from "./Containers/Portfolio/Portfolio";
import HomeWork57 from "./Containers/Homework57/HomeWork57";
import HomeWork53 from "./Containers/HomeWork53/HomeWork53";
import HomeWork60 from "./Containers/HomeWork60/HomeWork60";


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
        <Route path='/homework57' element={(
          <HomeWork57/>
        )}/>
        <Route path='/homework53' element={(
          <HomeWork53/>
        )}/>
        <Route path='/homework60' element={(
          <HomeWork60/>
        )}/>
        <Route path='*' element={(
        <h1>Not found!</h1>
      )}/>
      </Routes>
    </>
  );
}

export default App;
