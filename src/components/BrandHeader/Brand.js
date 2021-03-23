//import React, { Component } from 'react';
/*Importamos nuestro componente Image*/
//import Image from '../../../src/Image';
import logo from '../../assets/logo.png'

function Brand({ title }){
  return (
    <nav>
      <ul>
        <img style={{width:"40px"}} src={logo} alt="Logo de la app" />
        <h1 style={{color:"#000",marginLeft:"10px"}}>{title}</h1>
      </ul>
      
    </nav>
    
  );
}

export default Brand;
