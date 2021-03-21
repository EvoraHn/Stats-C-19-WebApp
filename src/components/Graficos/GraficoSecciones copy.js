import React from 'react';
//import './template.css';
import {Bar} from 'react-chartjs-2';
// para usar esta librería se de instalar con el siguiente comando en la raiz del proyecto
 
//npm install --save react-chartjs-2 chart.js

function GraficoSecciones ({hoy, ayer, antier}){
  const data={
    //cuantas secciones se usarán, cada valor en los datasets corresponde a cada sección 
    labels: [],
    datasets:[{
      //Nombre de la sección
      label:'Hoy',
      //estilos
      backgroundColor: 'blue',
      borderColor:'grey',
      borderWidth:0.5,
      hoverBackgroundColor:'rgba(0,0,1,0.2)',
      hoverBorderColor: '#fff',
      //1 valor por sección ( 'enero 2020','abril 2020','enero 2021','actual' )
      data:hoy
    },{
      label:'Ayer',
      backgroundColor: 'rgba(255,0,0,1)',
      borderColor:'grey',
      borderWidth:0.5,
      hoverBackgroundColor:'#red',
      hoverBorderColor: '#red',
      data:ayer
    },{
      label:'Antier',
      backgroundColor: 'rgba(0,255,0,1)',
      borderColor:'grey',
      borderWidth:0.5,
      hoverBackgroundColor:'rgba(0,0,1,0.2)',
      hoverBorderColor: '#fff',
      data:antier
    }
  ]}
  //opciones para el grafico de barras 
  const opciones={
    //abarca toda el espacio necesario a lo alto
    maintainAspectRatio:false,
    //se convierte en un gráfico responsivo
    responsive:true,    
  }
 //sección de estilos locales
  const Style={
    //backgroundColor:'#454',
    borderColor:'Red',
  }
  return (
    //div con estilo local, encabezado y muestra de el gráfico de barras
    <div style={Style}>
      
        <Bar data={data} options={opciones} ></Bar>
        
    </div>
    
    
  );
}




export default GraficoSecciones;
