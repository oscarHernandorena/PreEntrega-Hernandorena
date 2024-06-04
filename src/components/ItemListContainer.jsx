import React from 'react';
import NavBar from "./NavBar.jsx";
import Album from "./Album.jsx";
import Footer from "./Footer";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
       <div className='col-md-3'><Album /></div> 
       <div className='col-md-3'><Album /></div> 
       <div className='col-md-3'><Album /></div> 
       <div className='col-md-3'><Album /></div> 
       <div className='col-md-3'><Album /></div> 
       <div className='col-md-3'><Album /></div> 
       <div className='col-md-3'><Album /></div>  
       <div className='col-md-3'><Album /></div>
       
      </div>bsdflGFBWKB
    </div>
  );
}

export default ItemListContainer;


