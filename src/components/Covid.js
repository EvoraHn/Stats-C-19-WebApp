import React, {useState, useEffect} from 'react'
import axios from "axios"

const Covid=() => {
const [country, setCountry] = useState('Honduras');
const [aux, setAux] = useState(null);
const [day1, setDay1] = useState(null);
const [day2, setDay2] = useState(null);
const [day3, setDay3] = useState(null);


const getData1 = (_date) =>{
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
        params: {date: "2020-03-29", name: country},
        headers: {
          'x-rapidapi-key': '57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
    //   console.log(response.data[0].provinces[0].confirmed);
     console.log(response.data);
     setDay1(response.data[0]);
     console.log("Promesa aceptada")
      }).catch(function (error) {
          console.error(error);
          console.log("Promesa rechazada")
      });
}

const getData2 = () =>{


    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
        params: {date: "2020-03-30", name: country},
        headers: {
          'x-rapidapi-key': '57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
    //   console.log(response.data[0].provinces[0].confirmed);
     console.log(response.data);
     setDay2(response.data[0]);
     console.log("Promesa aceptada")
      }).catch(function (error) {
          console.error(error);
          console.log("Promesa rechazada")
      });
}

const getData3 = () =>{
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/report/country/name',
        params: {date: "2020-03-31", name: country},
        headers: {
          'x-rapidapi-key': '57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
    //   console.log(response.data[0].provinces[0].confirmed);
     console.log(response.data);
     setDay3(response.data[0]);
     console.log("Promesa aceptada")
      }).catch(function (error) {
          console.error(error);
          console.log("Promesa rechazada")
      });
}



const allData = async() =>{
    await setTimeout(function delay (){
        getData1()
    },1000)
  //  setDay1(aux);
   // setAux(null);
    console.log("Day 1 es: ");
    console.log(day1);
    await setTimeout(function delay (){
        getData2()
    },3000)
 //  setDay2(aux);
  //  setAux(null);
    console.log("Day 2 es: ");
    console.log(day2);
    await setTimeout(function delay (){
        getData3()
    },3000)
   // setDay3(aux);
    //setAux(null);
    console.log("Day 3 es: ");
    console.log(day3);
    //alert("Finalizada")
}


useEffect(() => {
  //  getData2("2020-03-03")
}, [])

const onChangeHandler = event => {
    setCountry(event.target.value);
    console.log(country);
};

    return (
        <div>
            <h1>Hola</h1>
            <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={country}
          />
            <button
            onClick={allData}>Presiona</button>
            {
                day2&&day1&&day3?
                <div>
                <p>{day1.country}</p>
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
                <p>Activos: {day3.provinces[0].active}</p>
                </div>:
                <p>No hay datos para esta fecha</p>
            }
        </div>
    )
}

export default Covid;
