//jshint esversion:6

// import React,{Component} from "react";
// import GoogleMapReact from "google-map-react";




// const data =[
//     {
//         id:1,
//         title:"Car crashed at 100 ikorodu road",
//         descriptions:"serious accident just occurerd along ikorodu, where BRT that failed break crushed into pieces a bike man that was on the BRT lane,about 2 passengers in the BRT bus died instantly while many sustained injury",
//         date:"06/08/2018",
//         type:"Accident",
//         imageUrl:"https://media.istockphoto.com/photos/car-crash-accident-on-the-road-picture-id850346406?k=6&m=850346406&s=612x612&w=0&h=vFknz5yP3aUjjrlWWOEWC_fycsrXixYXyAnBUGWnHE8=",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ikorodu"
//     },
//     {
//         id:2,
//         title:"Smelling refuse dump along ketu road",
//         descriptions:"The refuse dump along ketu road so repulsive and can cause serious harm and disease to the people living around that area",
//         date:"05/09/2019",
//         type:"Refuse",
//         imageUrl:"https://guardian.ng/wp-content/uploads/2018/01/FAGBA-ROAD-AGEGE-.jpg",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ketu"
//     },
//     {
//         id:3,
//         title:"Dangerous Pothole at Ikosi road",
//         descriptions:"There is a dangerous pothole along ikorodu ojota Express, this pothole needs urgent attension as it nearly cause an accident today",
//         date:"08/04/2019",
//         type:"Pothole",
//         imageUrl:"https://thenationonlineng.net/wp-content/uploads/2019/04/Ajao-Estate-1140x570.jpg",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ikosi"
//     },
//     {
//         id:4,
//         title:"serious refuse Dump along ikorodu road",
//         descriptions:" The refuse dump along ketu road so repulsive and can cause serious harm and disease to the people living around that area",
//         date:"09/02/2017",
//         type:"Refuse",
//         imageUrl:"https://guardian.ng/wp-content/uploads/2018/01/FAGBA-ROAD-AGEGE-.jpg",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ikorodu"
//     },
//     {
//         id:5,
//         title:"Dangerous pothole along ojota road",
//         descriptions:"There is a dangerous pothole along ikorodu ojota Express, this pothole needs urgent attension as it nearly cause an accident today",
//         date:"01/01/2019",
//         type:"Pothole",
//         imageUrl:"https://thenationonlineng.net/wp-content/uploads/2019/04/Ajao-Estate-1140x570.jpg",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ojota"
//     },
//     {
//         id:6,
//         title:"Fatal accident along ikeja road",
//         descriptions:"serious accident just occurerd along ikorodu, where BRT that failed break crushed into pieces a bike man that was on the BRT lane,about 2 passengers in the BRT bus died instantly while many sustained injury",
//         date:"12/9/2014",
//         type:"Accident",
//         imageUrl:"https://media.istockphoto.com/photos/car-crash-accident-on-the-road-picture-id850346406?k=6&m=850346406&s=612x612&w=0&h=vFknz5yP3aUjjrlWWOEWC_fycsrXixYXyAnBUGWnHE8=",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ikeja"
//     },
//     {
//         id:7,
//         title:"Serious Accident between traler and okada",
//         descriptions:"serious accident just occurerd along ikorodu, where BRT that failed break crushed into pieces a bike man that was on the BRT lane,about 2 passengers in the BRT bus died instantly while many sustained injury",
//         date:"10/10/2018",
//         type:"Accident",
//         imageUrl:"https://media.istockphoto.com/photos/car-crash-accident-on-the-road-picture-id850346406?k=6&m=850346406&s=612x612&w=0&h=vFknz5yP3aUjjrlWWOEWC_fycsrXixYXyAnBUGWnHE8=",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Berger"
//     },
//     {
//         id:8,
//         title:"serious refuse Dump along ikorodu road",
//         descriptions:" The refuse dump along ketu road so repulsive and can cause serious harm and disease to the people living around that area",
//         date:"11/02/2017",
//         type:"Refuse",
//         imageUrl:"https://guardian.ng/wp-content/uploads/2018/01/FAGBA-ROAD-AGEGE-.jpg",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ikorodu"
//     },
//     {
//         id:9,
//         title:"serious refuse Dump along ikorodu road",
//         descriptions:" The refuse dump along ketu road so repulsive and can cause serious harm and disease to the people living around that area",
//         date:"10/02/2017",
//         type:"Refuse",
//         imageUrl:"https://guardian.ng/wp-content/uploads/2018/01/FAGBA-ROAD-AGEGE-.jpg",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Ikorodu"
//     },
//     {
//         id:10,
//         title:"Serious Accident between traler and okada",
//         descriptions:"serious accident just occurerd along ikorodu, where BRT that failed break crushed into pieces a bike man that was on the BRT lane,about 2 passengers in the BRT bus died instantly while many sustained injury",
//         date:"10/10/2018",
//         type:"Accident",
//         imageUrl:"https://media.istockphoto.com/photos/car-crash-accident-on-the-road-picture-id850346406?k=6&m=850346406&s=612x612&w=0&h=vFknz5yP3aUjjrlWWOEWC_fycsrXixYXyAnBUGWnHE8=",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Berger"
//     },
//     {
//         id:11,
//         title:"Serious Accident between traler and okada",
//         descriptions:"serious accident just occurerd along ikorodu, where BRT that failed break crushed into pieces a bike man that was on the BRT lane,about 2 passengers in the BRT bus died instantly while many sustained injury",
//         date:"10/10/2018",
//         type:"Accident",
//         imageUrl:"https://media.istockphoto.com/photos/car-crash-accident-on-the-road-picture-id850346406?k=6&m=850346406&s=612x612&w=0&h=vFknz5yP3aUjjrlWWOEWC_fycsrXixYXyAnBUGWnHE8=",
//         lat:6.567813,
//         lng:3.371250,
//         location: "Berger"
//     }



// ];
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component{
//     state={
//         issues:[]
//     }

//     render(){
//         return (
            
//                 <div style={{ height: "100vh", width: "100%", borderRadius:"2px"}}>
//                     {/* position:"fixed" */}
//                     <GoogleMapReact
//                         bootstrapURLKeys={{ key: "AIzaSyCbmWI2dStX29BKtGHBzq7StRAORp1upUc" }}
//                         defaultCenter={{lat:59.95,lng:30.33}}
//                         defaultZoom={14}
//                         style={{height:"100vh"}}>
//                         {data.map((issue,i)=>
//                             <AnyReactComponent
//                                 lat={issue.lat}
//                                 lng={issue.lng}
//                                 text={issue.type}
//                                 key={i}
//                             />
//                         )}
//                     </GoogleMapReact>
//                 </div>
            
//         );
//     }
// }
// export default Map;

import React from "react";
import { GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps";


function Map(){
  return(
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{lat:45.421532,lng:-75.697189}}
    />
  )
}

const WrappedMap= withScriptjs(withGoogleMap(Map));
export default function App() {
  return(
    <div style={{width:"100vw",height:"100vh"}}>
    <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDfMkchztCunL2meqCyDlsTsu7wvBFTKf0`}
    loadingElement={<div style={{height:"100%"}}></div>}
    containerElement={<div style={{height:"100%"}}></div>}
    mapElement={<div style={{height:"100%"}}></div>}
    
     />

    </div>
  )
  
}