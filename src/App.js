import React from 'react';
import './App.css';
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Services from './components/Services';

function App() {
  return (
    <div>
       <Banner/>
       <Nav/>
       <Services/>
    </div>
  );
}

export default App;
