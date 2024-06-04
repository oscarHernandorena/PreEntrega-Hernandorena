import React from 'react';
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() { 
  return ( 
  <div> 
    <NavBar /> 
    <ItemListContainer 
      greeting="¡Bienvenido a Daggerstore!"
   /> 
   <Footer /> 
  </div> ); 
  } 

  
export default App;



