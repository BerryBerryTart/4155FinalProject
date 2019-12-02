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
    const [completed, setCompleted] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
     
    // for progress bar 
    const progress = React.useRef(() => {});
    React.useEffect(() => {
      progress.current = () => {
        if (completed > 100) {
          setCompleted(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 20;
          const diff2 = Math.random() * 30;
          setCompleted(completed + diff);
          setBuffer(completed + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      function tick() {
        progress.current();
      }
      const timer = setInterval(tick, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

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
          <LinearProgress  style={{marginTop:'5px'}} variant="buffer" value={completed} valueBuffer={buffer} color="secondary" />
          <h4 style={{color: "#00703c" }}>{props.time}</h4>
          </div>
    )
}
