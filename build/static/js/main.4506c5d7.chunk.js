(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var r=a(4),c=a.n(r),o=a(74),s=a.n(o),n=(a(50),a.p,a(81),a(47)),i=a.n(n),l=a(75),d=a(15),u=a(34),j=a.n(u),b=a(32),h=a(2);var f=function(e){var t={labels:[],datasets:[{label:"Hoy",backgroundColor:"blue",borderColor:"grey",borderWidth:.5,hoverBackgroundColor:"rgba(0,0,1,0.2)",hoverBorderColor:"#fff",data:e.hoy},{label:"Ayer",backgroundColor:"rgba(255,0,0,1)",borderColor:"grey",borderWidth:.5,hoverBackgroundColor:"#red",hoverBorderColor:"#red",data:e.ayer},{label:"Antier",backgroundColor:"rgba(0,255,0,1)",borderColor:"grey",borderWidth:.5,hoverBackgroundColor:"rgba(0,0,1,0.2)",hoverBorderColor:"#fff",data:e.antier}]};return Object(h.jsx)("div",{style:{borderColor:"Red"},children:Object(h.jsx)(b.Bar,{data:t,options:{maintainAspectRatio:!1,responsive:!0}})})};var p=function(e){var t=e.title,a=e.hoy,r=e.ayer,c=e.antier;return Object(h.jsx)("section",{className:"flex justify-center w-11/12 h-80 my-7 md:w-11/12 Cards align-center",children:Object(h.jsxs)("section",{className:"flex flex-col items-center justify-center w-full border-2 border-black border-solid rounded-3xl",children:[Object(h.jsx)("div",{className:"flex items-center justify-center w-full h-full mt-5 text-white bg-gray-100",children:Object(h.jsx)(f,{hoy:a,ayer:r,antier:c})}),Object(h.jsx)("h2",{children:t})]})})};var v=function(e){var t={labels:[],datasets:[{label:"Infectados",backgroundColor:"blue",borderColor:"grey",borderWidth:1,hoverBackgroundColor:"rgba(0,0,1,0.2)",hoverBorderColor:"#fff",data:e.dataInfectados},{label:"Muertes",backgroundColor:"rgba(255,0,0,1)",borderColor:"grey",borderWidth:1,hoverBackgroundColor:"#red",hoverBorderColor:"#red",data:e.dataMuertes},{label:"Recuperados",backgroundColor:"rgba(0,255,0,1)",borderColor:"grey",borderWidth:1,hoverBackgroundColor:"rgba(0,0,1,0.2)",hoverBorderColor:"#fff",data:e.dataRecuperados},{label:"Activos",backgroundColor:"yellow",borderColor:"grey",borderWidth:1,hoverBackgroundColor:"rgba(0,0,1,0.2)",hoverBorderColor:"#fff",data:e.dataActivos}]};return Object(h.jsx)("div",{style:{borderColor:"Red"},children:Object(h.jsx)(b.Bar,{data:t,options:{maintainAspectRatio:!1,responsive:!0}})})};var x=function(e){var t=e.title,a=e.dataInfectados,r=e.dataMuertes,c=e.dataRecuperados,o=e.dataActivos;return Object(h.jsx)("section",{className:"flex justify-center Cards align-center h-4/5",children:Object(h.jsxs)("section",{className:"flex flex-col items-center justify-center w-11/12 border-2 border-black border-solid rounded-3xl",children:[Object(h.jsx)("div",{className:"flex items-center justify-center w-full h-full mt-5 text-white bg-gray-200",children:Object(h.jsx)(v,{dataInfectados:a,dataMuertes:r,dataRecuperados:c,dataActivos:o})}),Object(h.jsx)("h2",{className:"text-lg md:text-2xl",children:t})]})})},m=a(35);m.a.apps.length||m.a.initializeApp({apiKey:"AIzaSyDdrF91TCDcA7fqoFrWtzX2Hz_zZXRDhSQ",authDomain:"covid19projectpw2.firebaseapp.com",databaseURL:"https://covid19projectpw2-default-rtdb.firebaseio.com",projectId:"covid19projectpw2",storageBucket:"covid19projectpw2.appspot.com",messagingSenderId:"550190089942",appId:"1:550190089942:web:f7739696984683f3e52b77"});var g=m.a,O=function(){var e=Object(r.useState)("Mexico"),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(null),s=Object(d.a)(o,2),n=(s[0],s[1],Object(r.useState)()),u=Object(d.a)(n,2),b=u[0],f=u[1],v=Object(r.useState)(),m=Object(d.a)(v,2),O=m[0],y=m[1],C=Object(r.useState)(),w=Object(d.a)(C,2),k=w[0],B=w[1],S=Object(r.useState)(null),A=Object(d.a)(S,2),R=A[0],N=A[1],I=Object(r.useState)(null),D=Object(d.a)(I,2),T=D[0],M=D[1],P=Object(r.useState)(null),W=Object(d.a)(P,2),z=W[0],F=W[1],L=Object(r.useState)(null),E=Object(d.a)(L,2),q=E[0],G=E[1],H=Object(r.useState)(null),J=Object(d.a)(H,2),U=J[0],X=J[1];console.log(R),console.log(T),console.log(z),console.log(q);var K=function(){return Object(h.jsxs)("section",{class:"grid grid-cols-1 md:grid-cols-2 align-center justify-center",children:[Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Confirmados",class:"col-span-1 m-auto",hoy:[z[2]],ayer:[z[1]],antier:[z[0]]})}),Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Activos",class:"col-span-1 m-auto",hoy:[U[2]],ayer:[U[1]],antier:[U[0]]})}),Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Recuperados",class:"col-span-1 m-auto",hoy:[R[2]],ayer:[R[1]],antier:[R[0]]})}),Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Muertos",class:"col-span-1 m-auto",hoy:[q[2]],ayer:[q[1]],antier:[q[0]]})})]})},Q=function(){g.database().ref("covid/"+a).on("value",(function(e){e.val()?g.database().ref("covid/"+a+"/data/data/").on("value",(function(e){var t=e.val(),r=[];for(var c in N(r),t)g.database().ref("covid/"+a+"/data/data/"+c+"/data/recovered").on("value",(function(e){var t=e.val();r.push(t)}));var o=[];for(var s in M(o),t)g.database().ref("covid/"+a+"/data/data/"+s+"/data/datetime").on("value",(function(e){var t=e.val();o.push(t)}));var n=[];for(var i in F(n),t)g.database().ref("covid/"+a+"/data/data/"+i+"/data/confirmed").on("value",(function(e){var t=e.val();n.push(t)}));var l=[];for(var d in G(l),t)g.database().ref("covid/"+a+"/data/data/"+d+"/data/deaths").on("value",(function(e){var t=e.val();l.push(t)}));var u=[];for(var j in X(u),t)g.database().ref("covid/"+a+"/data/data/"+j+"/data/active").on("value",(function(e){var t=e.val();u.push(t)}))})):Y()}))},V=function(e){var t={method:"GET",url:"https://covid-19-data.p.rapidapi.com/report/country/name",params:{date:"2020-03-29",name:a},headers:{"x-rapidapi-key":"57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c","x-rapidapi-host":"covid-19-data.p.rapidapi.com"}};j.a.request(t).then((function(e){f(e.data[0]),console.log("Promesa aceptada")})).catch((function(e){console.error(e),console.log("Promesa rechazada")}))},Z=function(){var e={method:"GET",url:"https://covid-19-data.p.rapidapi.com/report/country/name",params:{date:"2020-03-30",name:a},headers:{"x-rapidapi-key":"57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c","x-rapidapi-host":"covid-19-data.p.rapidapi.com"}};j.a.request(e).then((function(e){y(e.data[0]),console.log("Promesa aceptada")})).catch((function(e){console.error(e),console.log("Promesa rechazada")}))},_=function(){var e={method:"GET",url:"https://covid-19-data.p.rapidapi.com/report/country/name",params:{date:"2020-03-31",name:a},headers:{"x-rapidapi-key":"57d8c19e8amshebeee19daa84596p188d46jsna6814a99952c","x-rapidapi-host":"covid-19-data.p.rapidapi.com"}};j.a.request(e).then((function(e){B(e.data[0]),console.log("Promesa aceptada")})).catch((function(e){console.error(e),console.log("Promesa rechazada")}))},Y=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout((function(){V()}),1e3);case 2:return console.log("Day 1 es: "),console.log(b),e.next=6,setTimeout((function(){Z(),console.log(O)}),2e3);case 6:return console.log(O),e.next=9,setTimeout((function(){_(),console.log("Day 3 es: "),console.log(k)}),5e3);case 9:console.log("Day 3 es: "),console.log(k);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){return Object(h.jsxs)("section",{class:"grid grid-cols-1 md:grid-cols-2 align-center justify-center",children:[Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Confirmados",class:"col-span-1 m-auto",hoy:[k.provinces[0].confirmed],ayer:[O.provinces[0].confirmed],antier:[b.provinces[0].confirmed]})}),Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Activos",class:"col-span-1 m-auto",hoy:[k.provinces[0].active],ayer:[O.provinces[0].active],antier:[b.provinces[0].active]})}),Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Recuperados",class:"col-span-1 m-auto",hoy:[k.provinces[0].recovered],ayer:[O.provinces[0].recovered],antier:[b.provinces[0].recovered]})}),Object(h.jsx)("div",{class:"flex justify-center items-center",children:Object(h.jsx)(p,{title:"Muertos",class:"col-span-1 m-auto",hoy:[k.provinces[0].deaths],ayer:[O.provinces[0].deaths],antier:[b.provinces[0].deaths]})})]})};return Object(r.useEffect)((function(){Q()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("section",{class:"flex justify-center items-center",children:Object(h.jsx)("h1",{class:"text-3xl md:text-6xl",children:"Bienvenidos a COVID STATS"})}),Object(h.jsxs)("section",{class:"flex justify-center items-center m-5",children:[Object(h.jsx)("section",{className:"text-sm ",children:Object(h.jsx)("h2",{className:"sm:text-lg",children:"Nombre del pais "})}),Object(h.jsx)("input",{type:"text",name:"name",onChange:function(e){c(e.target.value),console.log(a)},value:a,className:"m-3 px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-lg shadow  focus:outline-none focus:shadow-outline w-6/12 "}),Object(h.jsx)("button",{onClick:Q,className:"cursor-pointer bg-green-600 hover:bg-green-500 shadow-xl px-5 py-2 inline-block text-green-100 hover:text-white rounded",children:"Buscar"})]}),O&&b&&k?Object(h.jsxs)("div",{children:[Object(h.jsx)("section",{class:"flex justify-center items-center",children:Object(h.jsx)("h2",{class:"text-3xl md:text-6xl",children:"Ultimos Datos Obtenidos"})}),Object(h.jsx)($,{})]}):R?Object(h.jsx)(K,{}):Object(h.jsx)("p",{children:"No hay datos"}),Object(h.jsxs)("section",{children:[Object(h.jsx)("section",{class:"h-screen",children:Object(h.jsx)(x,{title:"Panorama Actual",dataInfectados:[300],dataMuertes:[200],dataRecuperados:[75],dataActivos:[420]})}),Object(h.jsx)("footer",{class:"w-full h-20 bg-gray-900 text-white flex items-center justify-center",children:"Desarrollo de Portales Web 2, Grupo 2 \xa9 2021"})]})]})},y=a(33),C=a(8);var w=function(e){var t=e.label,a=e.uri;return Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:a,children:t})})};a(205);var k=function(){var e=[{label:"Mundo",uri:"/"}].map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(w,{label:e.label,uri:e.uri},t),Object(h.jsx)("button",{style:{backgroundColor:"#118ab2",color:"#fff",width:"180%",paddingLeft:"5%",marginRight:"20px",paddingRight:"5%"},children:"Recargar"})]})})}));return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:e})})},B=a.p+"static/media/logo.713541f9.png";var S=function(e){var t=e.title;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("img",{style:{width:"40px"},src:B,alt:"Logo de la app"}),Object(h.jsx)("h1",{style:{color:"#000",marginLeft:"10px"},children:t})]})})};a(206);var A=function(e){return e.children,Object(h.jsxs)("header",{children:[Object(h.jsx)(S,{title:"Covid Stats"}),Object(h.jsx)(k,{})]})};var R=function(){return Object(h.jsx)(y.a,{children:Object(h.jsxs)("section",{children:[Object(h.jsx)(A,{}),Object(h.jsx)(C.c,{children:Object(h.jsx)(C.a,{path:"/",exact:!0,children:Object(h.jsx)(O,{})})})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,208)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),N()},50:function(e,t,a){},81:function(e,t,a){}},[[207,1,2]]]);
//# sourceMappingURL=main.4506c5d7.chunk.js.map