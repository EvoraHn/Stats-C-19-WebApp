import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardSmall from "../Cards/CardSmall";
import CardPrincipal from "./../Cards/CardPrincipal";
import firebase from '../../FireBaseInit'



const Covid = () => {
  const [country, setCountry] = useState('Honduras');
  const [aux, setAux] = useState(null);
  const [day1, setDay1] = useState();
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [RecoveredFB, setRecoveredFB] = useState(null)
  const [datetimeFB, setDateTimeFB] = useState(null)
  const [confirmedFB, setConfirmedFB] = useState(null)
  const [deathsFB, setdeathsFB] = useState(null)
  const [actives, setActivesFB] = useState(null)
 /* const [showRecoveredFB, setsRecoveredFB] = useState(null)
  const [showdatetimeFB, setsDateTimeFB] = useState(null)
  const [showconfirmedFB, setsConfirmedFB] = useState(null)
  const [showdeathsFB, setsdeathsFB] = useState(null)
  const [showactives, setsActivesFB] = useState(null)
*/
  //firebase inicio

  //let Intento = Object.values(RecoveredFB);
 
  console.log(RecoveredFB)
  console.log(datetimeFB)
  console.log(confirmedFB)
  console.log(deathsFB)
  
  /*
  setsConfirmedFB(confirmedFB)
  setsRecoveredFB(RecoveredFB)
  setsdeathsFB(deathsFB)
  setsDateTimeFB(datetimeFB)
  setsActivesFB(actives)
*/

  const addDateFirebase = () => {
    const data = {
      country:country,
      data: {

      },
    }

    firebase.database().ref('covid/' + country).set({
      data
    });
  }


  const UpdateFirebase = (data) => {

    

    let covidAdd = firebase.database().ref('covid/' + country + '/data/data');
    let NewCovidAdd = covidAdd.push('dato4');
    NewCovidAdd.set({
      data
    });
  }



  //////

 

   
  const CardsSmallshow = () =>{
    return (
     <section class="grid grid-cols-1 md:grid-cols-2 align-center justify-center">
     <div class="flex justify-center items-center">
       <CardSmall title="Confirmados" class="col-span-1 m-auto" hoy={[confirmedFB[2]]} ayer={[confirmedFB[1]]} antier={[confirmedFB[0]]}></CardSmall>
     </div>
     <div class="flex justify-center items-center">
       <CardSmall title="Activos" class="col-span-1 m-auto" hoy={[actives[2]]} ayer={[actives[1]]} antier={[actives[0]]}></CardSmall>
     </div>
     <div class="flex justify-center items-center">
       <CardSmall title="Recuperados" class="col-span-1 m-auto" hoy={[RecoveredFB[2]]} ayer={[RecoveredFB[1]]} antier={[RecoveredFB[0]]}></CardSmall>
     </div>
     <div class="flex justify-center items-center">
       <CardSmall title="Muertos" class="col-span-1 m-auto" hoy={[deathsFB[2]]} ayer={[deathsFB[1]]} antier={[deathsFB[0]]}></CardSmall>
     </div>
   </section>
    )
  
   }

  /////

  const readDatabase = () => {
    // firebase.auth().currentUser.uid
    const readFirebase = firebase.database().ref('covid/' + country + '/data/data/')
    readFirebase.on('value', (snapshot) => {
      const data = snapshot.val();

      const RecoveredFBA =[]
      setRecoveredFB(RecoveredFBA)
      for (const properti in data) {
        const readDataFirebase = firebase.database().ref('covid/' + country + '/data/data/' + properti + '/data/recovered')
        readDataFirebase.on('value', (snapshots) => {
         // const dataa  =snapshots.val()
          const dataa = snapshots.val()
          RecoveredFBA.push(dataa)
         // console.log(dataa)
         // setRecoveredFB(dataa)
        })
      }

      const dateTimeFBA =[]
      setDateTimeFB (dateTimeFBA)
      for (const properti in data) {
        const readDataFirebase = firebase.database().ref('covid/' + country + '/data/data/' + properti + '/data/datetime')
        readDataFirebase.on('value', (snapshots) => {
         // const dataa  =snapshots.val()
          const dataa = snapshots.val()
          dateTimeFBA.push(dataa)
         // console.log(dataa)
         // setRecoveredFB(dataa)
        })
      }

      const confirmedFBA =[]
      setConfirmedFB (confirmedFBA)
      for (const properti in data) {
        const readDataFirebase = firebase.database().ref('covid/' + country + '/data/data/' + properti + '/data/confirmed')
        readDataFirebase.on('value', (snapshots) => {
         // const dataa  =snapshots.val()
          const dataa = snapshots.val()
          confirmedFBA.push(dataa)
         // console.log(dataa)
         // setRecoveredFB(dataa)
        })
      }

      const deathsFBA =[]
      setdeathsFB (deathsFBA)
      for (const properti in data) {
        const readDataFirebase = firebase.database().ref('covid/' + country + '/data/data/' + properti + '/data/deaths')
        readDataFirebase.on('value', (snapshots) => {
         // const dataa  =snapshots.val()
          const dataa = snapshots.val()
          deathsFBA.push(dataa)
         // console.log(dataa)
         // setRecoveredFB(dataa)
        })
      }
      const activesFBA =[]
      setActivesFB (activesFBA)
      for (const properti in data) {
        const readDataFirebase = firebase.database().ref('covid/' + country + '/data/data/' + properti + '/data/active')
        readDataFirebase.on('value', (snapshots) => {
         // const dataa  =snapshots.val()
          const dataa = snapshots.val()
          activesFBA.push(dataa)
         // console.log(dataa)
         // setRecoveredFB(dataa)
        })
      }
    
    })

   

  }
  

  const dataFireBase = () => {


    const readFirebase = firebase.database().ref('covid/' + country)
    readFirebase.on('value', (snapshot) => {
      const data = snapshot.val();

      if(data) { readDatabase()  }
      else { allData() }
      
    })
  }

  /// firebase final



  const getData1 = (_date) => {
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
      params: { date: "2020-03-29", name: country },
      headers: {
        'x-rapidapi-key': '57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      //   console.log(response.data[0].provinces[0].confirmed);
      //console.log(response.data);
      setDay1(response.data[0]);
      console.log("Promesa aceptada")
    }).catch(function (error) {
      console.error(error);
      console.log("Promesa rechazada")
    });

  }

  const getData2 = () => {


    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
      params: { date: "2020-03-30", name: country },
      headers: {
        'x-rapidapi-key': '57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      //   console.log(response.data[0].provinces[0].confirmed);
      //console.log(response.data);
      setDay2(response.data[0]);
      console.log("Promesa aceptada")
    }).catch(function (error) {
      console.error(error);
      console.log("Promesa rechazada")
    });

    ///
  

  }

  const getData3 = () => {
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
      params: { date: "2020-03-31", name: country },
      headers: {
        'x-rapidapi-key': '57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      //console.log(response.data[0].provinces[0].confirmed);
      //console.log(response.data);
      setDay3(response.data[0]);
      console.log("Promesa aceptada")
    }).catch(function (error) {
      console.error(error);
      console.log("Promesa rechazada")
    });


    //
  
  }


  const datasday = (days1) =>{

    const data = {

      datetime: days1.date,
      confirmed:days1.provinces[0].confirmed,
      recovered:days1.provinces[0].recovered ,
      active:days1.provinces[0].active,
      deaths: days1.provinces[0].deaths,

    }
    UpdateFirebase(data)

  }
  const datasday2 =  (days2)=>{

    const data = {

      datetime: days2.date,
      confirmed:days2.provinces[0].confirmed,
      recovered:days2.provinces[0].recovered ,
      active:days2.provinces[0].active,
      deaths: days2.provinces[0].deaths,

    }
    UpdateFirebase(data)

  }

  const datasday3 =  (days3)=>{
    console.log(days3)
   const data  = {
      datetime: days3.date,
      confirmed:days3.provinces[0].confirmed,
      recovered:days3.provinces[0].recovered ,
      active:days3.provinces[0].active,
      deaths: days3.provinces[0].deaths,

    }
    UpdateFirebase(data)
  }


  const allData = async () => {

    await setTimeout(function delay() {
      getData1()   

  //    datasday(day1)
    },1000 )
    //  setDay1(aux);
    // setAux(null);
    console.log("Day 1 es: ");
    console.log(day1);
 
    
    await setTimeout(function delay() {
      getData2()
      console.log(day2);
      //datasday2(day2)
    

    },2000)
    //  setDay2(aux);
    //  setAux(null);
   
    console.log(day2);

    


    await setTimeout(function delay() {
      getData3()

   //   datasday3(day3)
      console.log("Day 3 es: ");
    console.log(day3);  
    
    },5000)
    // setDay3(aux);
    //setAux(null);
    console.log("Day 3 es: ");
    console.log(day3);

    
    
    
  
    //alert("Finalizada")

 

  }

  const CardsSmalld = () =>{
    return (
     <section class="grid grid-cols-1 md:grid-cols-2 align-center justify-center">
     <div class="flex justify-center items-center">
       <CardSmall title="Confirmados" class="col-span-1 m-auto" hoy={[day3.provinces[0].confirmed]} ayer={[day2.provinces[0].confirmed]} antier={[day1.provinces[0].confirmed]}></CardSmall>
     </div>
     <div class="flex justify-center items-center">
       <CardSmall title="Activos" class="col-span-1 m-auto" hoy={[day3.provinces[0].active]} ayer={[day2.provinces[0].active]} antier={[day1.provinces[0].active]}></CardSmall>
     </div>
     <div class="flex justify-center items-center">
       <CardSmall title="Recuperados" class="col-span-1 m-auto" hoy={[day3.provinces[0].recovered]} ayer={[day2.provinces[0].recovered]} antier={[day1.provinces[0].recovered]}></CardSmall>
     </div>
     <div class="flex justify-center items-center">
       <CardSmall title="Muertos" class="col-span-1 m-auto" hoy={[day3.provinces[0].deaths]} ayer={[day2.provinces[0].deaths]} antier={[day1.provinces[0].deaths]}></CardSmall>
     </div>
   </section>
    )
  
   }




  const onChangeHandler = event => {
    setCountry(event.target.value);
    console.log(country);
  };
  /*<p>{day1.country}</p>
                  <p>Casos confirmados: {day1.provinces[0].confirmed}</p>
                  <p>Recuperados: {day1.provinces[0].recovered}</p>
                  <p>Fallecidos: {day1.provinces[0].deaths}</p>
                  <p>Activos: {day1.provinces[0].active}</p>
  
                  <br/>
                  <p>Casos confirmados: {day2.provinces[0].confirmed}</p>
                  <p>Recuperados: {day2.provinces[0].recovered}</p>
                  <p>Fallecidos:{day2.provinces[0].deaths}</p>
                  <p>Activos: {day2.provinces[0].active}</p>
                  <br/>
                  <p>Casos confirmados: {day3.provinces[0].confirmed}</p>
                  <p>Recuperados: {day3.provinces[0].recovered}</p>
                  <p>Fallecidos:{day3.provinces[0].deaths}</p>
                  <p>Activos: {day3.provinces[0].active}</p> */

                  useEffect(() => {
                    //addDateFirebase(data)
                    //UpdateFirebase()
                    //readDatabase();
                    dataFireBase()

                  }, []);

  return (
    <div>
      <section class="flex justify-center items-center">
        <h1 class="text-3xl md:text-6xl">Bienvenidos a COVID STATS</h1>
      </section>
      <section class="flex justify-center items-center m-5">
        <section className="text-sm ">
          <h2 className="sm:text-lg">Nombre del pais </h2>
        </section>
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={country}
          className="m-3 px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-lg shadow  focus:outline-none focus:shadow-outline w-6/12 "
        />
        <button
          onClick={dataFireBase}
          className="cursor-pointer bg-green-600 hover:bg-green-500 shadow-xl px-5 py-2 inline-block text-green-100 hover:text-white rounded"
        >Buscar</button>
      </section>
      {
        (day2 && day1 && day3 ) ? 
          <div>
            <section class="flex justify-center items-center">
              <h2 class="text-3xl md:text-6xl">Ultimos Datos Obtenidos</h2>
            </section>

          <CardsSmalld />
  

          </div> :
          (RecoveredFB)? <CardsSmallshow/> :<p>No hay datos</p>

      }

      <section>
        <section class="h-screen">
          <CardPrincipal title="Panorama Actual" dataInfectados={[300]} dataMuertes={[200]} dataRecuperados={[75]} dataActivos={[420]}></CardPrincipal>
        </section>
        <footer class="w-full h-20 bg-gray-900 text-white flex items-center justify-center">
          Desarrollo de Portales Web 2, Grupo 2 &copy; 2021
            </footer>
      </section>

    </div>

  )
}


export default Covid;
