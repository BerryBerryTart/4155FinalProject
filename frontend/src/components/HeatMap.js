import React from 'react'
import GoogleMapReact from 'google-map-react'

const thing = function(){
  console.log("test")
}


export default function HeatMap(props) {
    const heatMapData = {
        positions: props.positions/*[
          
      {lat: 35.30746, lng: -80.73569},
      {lat:35.3048, lng: -80.73253},
      {lat:35.30774, lng: -80.73118}
      
    ]*/,
      options: {
          radius: 45,
          opacity: 0.5
      }
    } ;

    const printStuff = thing()
   
    return (
        <div style={{ height: '50vh', width: '80%', }}>
        {printStuff}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB4kik_cwF06H7lBAYNTCbQU4ERUdpeHPo' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        >
          
          </GoogleMapReact>
         
          </div>
    )
}
