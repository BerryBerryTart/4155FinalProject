import React from 'react'
import GoogleMapReact from 'google-map-react'
import LinearProgress from '@material-ui/core/LinearProgress';


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


    return (
        <div style={{ height: '50vh', width: '80%', textAlign:'center' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB4kik_cwF06H7lBAYNTCbQU4ERUdpeHPo' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        >

          </GoogleMapReact>
          
          <h4 style={{color: "#00703c" }}>{props.time}</h4>
          </div>
    )
}
