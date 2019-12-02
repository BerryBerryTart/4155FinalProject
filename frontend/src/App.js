import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import AppHeader from './components/layout/AppHeader'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import HeatMap from './components/HeatMap'
import './App.css'
import SideBar from './components/layout/SideBar'
import HotspotPage from './components/pages/HotspotPage'
import axios from 'axios'
import About from './components/pages/About'
import FAQ from './components/pages/FAQ'

const applicationTheme = createMuiTheme({
  palette:{
    primary:{
      main:'#00703c'
    },
    secondary:{
      main:'#B3A369'
    }
  }
})

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          timeslices:[],
          currTimeSliceIndex: 0,
          refreshTimer: null,
          APS:[], //APS
          apsTime:'',
          currentPosition:[], //Most current postions
          newPosition:[],  //Latt on Long of APS's
          HTB:[],   //High Traffic Buildings
          totalCount:0,
          center: {
            lat: 35.3058,
            lng: -80.7324
          },
          zoom: 15
        }
    }


  convertAPS = () =>{
   // console.log( this.state.APS)
    this.setState({newPosition:this.state.APS.map(aps => {
      var newPos;

      switch(aps.building){
            case 'Atki':
              newPos = { lat: 35.30576 , lng: -80.73243 , weight: aps.count}
              break;
            case 'AtkiG':
                newPos = { lat: 35.30576 , lng: -80.73243 , weight: aps.count}
                break;
            case 'AtkiL':
                newPos = { lat: 35.30576 , lng: -80.73243 , weight: aps.count}
                break;
            case 'Auxi':
                newPos = { lat: 35.30768 , lng: 3-80.73056 , weight: aps.count}
                break;
            case 'Barn':
                newPos = { lat: 35.30576 , lng: -80.73007 , weight: aps.count}
                break;
            case 'BelG':
                newPos ={ lat: 35.3052 , lng: -80.73546, weight: aps.count}
                break
            case 'BelH':
                newPos = { lat: 35.31048 , lng: -80.73552 , weight: aps.count}
                break
            case 'Bioi':
                newPos = { lat: 35.3126 , lng: -80.74191 , weight: aps.count}
                break
            case 'BioiVEST':
                newPos = { lat: 35.3126 , lng: -80.74191 , weight: aps.count}
                break
            case 'BursBOIL':
                newPos = { lat: 35.30744 , lng: -80.73231 , weight: aps.count}
                break
            case 'Cafe':
                newPos = { lat: 35.30917 , lng: -80.72827 , weight: aps.count}
                break
            case 'Came':
                newPos = { lat: 35.30764 , lng: -80.73123 , weight: aps.count}
                break
            case 'Cato':
                newPos = { lat: 35.30544 , lng: -80.72878 , weight: aps.count}
                break
            case 'CoEd':
                newPos = { lat: 35.30755 , lng: -80.73412, weight: aps.count}
                break
            case 'Colv':
                newPos = { lat: 35.30494 , lng: -80.73175 , weight: aps.count}
                break
            case 'Cone':
                newPos = { lat: 35.30527 , lng: -80.73314 , weight: aps.count}
                break
            case 'Duke':
                newPos = { lat: 35.31202 , lng: -80.74101, weight: aps.count}
                break
            case 'Denny':
                newPos = { lat: 35.30538 , lng: -80.72985 , weight: aps.count}
                break
            case 'EHS':
                newPos = { lat: 35.31118 , lng: -80.73798, weight: aps.count}
                break
            case 'EPIC':
                newPos = { lat: 35.30898 , lng: -80.74141 , weight: aps.count}
                break
            case 'FOPS':
                newPos = { lat: 35.3085 , lng:  -80.73014 , weight: aps.count}
                break
            case 'Faci':
                newPos = { lat: 35.31006 , lng: -80.7302 , weight: aps.count}
                break
            case 'FaciA':
                newPos = { lat: 35.30882 , lng: -80.72962 , weight: aps.count}
                break
            case 'Fret':
                newPos = { lat: 35.30607 , lng: -80.7291 , weight: aps.count}
                break
            case 'Frid':
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break
            case 'Gage':
                newPos = { lat: 35.30102 , lng: -80.73298, weight: aps.count}
                break
            case 'Grig':
                newPos = { lat: 35.31132 , lng: -80.74196, weight: aps.count}
                break
            case 'Harr':
                newPos = { lat: 35.30276 , lng: -80.73871, weight: aps.count}
                break
            case 'Heal':
                newPos = { lat: 35.31049 , lng: -80.72965, weight: aps.count}
                break
            case 'Hous':
                newPos = { lat: 35.30212 , lng: -80.73602, weight: aps.count}
                break
            case 'HunH':
                newPos = { lat: 35.30177, lng: -80.73649, weight: aps.count}
                break
            case 'Irwi':
                newPos = { lat: 35.30566 , lng: -80.73804, weight: aps.count}
                break
            case 'JBui':
                newPos = { lat: 35.30405 , lng: -80.72878, weight: aps.count}
                break
            case 'Kenn':
                newPos = { lat: 35.30589 , lng: -80.73094, weight: aps.count}
                break
            case 'King':
                newPos = { lat: 35.3051 , lng: -80.73253, weight: aps.count}
                break
            case 'Laur':
                newPos = { lat: 35.3026 , lng: -80.73599, weight: aps.count}
                break
            case 'Levi':
                newPos = { lat: 35.30299, lng: -80.73302, weight: aps.count}
                break
            case 'Lync':
                newPos = { lat: 35.31026 , lng: -80.73413, weight: aps.count}
                break
            case 'Mart':
                newPos = { lat: 35.31022 , lng: -80.72784, weight: aps.count}
                break
            case 'McEn':
                newPos = { lat: 35.30713 , lng: -80.73014, weight: aps.count}
                break
            case 'McMi':
                newPos = { lat: 35.30786 , lng: -80.72975, weight: aps.count}
                break
            case 'MilH':
                newPos = { lat: 35.30786 , lng: -80.72975, weight: aps.count}
                break
            case 'Memo':
                newPos = { lat: 35.30378 , lng: -80.7359, weight: aps.count}
                break
            case 'MiltA':
                newPos = { lat: 35.31129 , lng: -80.73469, weight: aps.count}
                break
            case 'MSII':
                newPos = { lat: 35.31259 , lng: -80.7402, weight: aps.count}
                break
            case 'McCo':
               newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break
            case 'PORT':
                newPos = { lat: 35.31163 , lng: -80.74296, weight: aps.count}
                break
            case 'McCoC':
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break
            case 'Pros':
                newPos = { lat: 35.30666 , lng: -80.73093, weight: aps.count}
                break
            case 'RUP':
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break
            case 'Rece':
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break
            case 'Rees':
                newPos = { lat: 35.30464 , lng: -80.7325, weight: aps.count}
                break
            case 'Robi':
                newPos = { lat: 35.30384 , lng: -80.73, weight: aps.count}
                break
            case 'SVDH':
                newPos = { lat: 35.30294 , lng: -80.73493, weight: aps.count}
                break
            case 'Smit':
                newPos = { lat: 35.30698 , lng: -80.73148, weight: aps.count}
                break
            case 'Stor':
                newPos = { lat: 35.30451 , lng: -80.72921, weight: aps.count}
                break
            case 'StorCOR':
                newPos = { lat: 35.30451, lng: -80.72921, weight: aps.count}
                break
            case 'StuA':
                newPos = { lat: 35.30622 , lng: -80.73423, weight: aps.count}
                break
            case 'StuH':
                newPos = { lat: 35.30225 , lng: -80.73361, weight: aps.count}
                break
            case 'StuU':
                newPos = { lat: 35.3086 , lng: -80.73369, weight: aps.count}
                break
            case 'Wach':
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break
            case 'With':
                newPos = { lat: 35.3109 , lng: -80.7326, weight: aps.count}
                break;
            case 'Wood':
                newPos = { lat: 35.30729 , lng: -80.73571, weight: aps.count}
                break;
            case 'CenC':
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break;
            default:
                newPos = { lat: 35.30627 , lng: -80.73002, weight: aps.count}
                break;
          }

          return newPos;
        })})

  }

  getTotalCount = ()=>{
    var x = this.state.currentPosition.map(x => {
      return x.count
    })
    var total = x.reduce((accumulator, currentValue) => accumulator + currentValue)
    this.setState({totalCount: total})
  }

  highTraffic = () =>{
    var h = this.state.currentPosition.sort(function(a,b){
     return  a.count > b.count
    })
    var newH = []
    for(var i =0; i < 3 ; i++){
      newH.push(h[i])
    }
    this.setState({HTB: newH})
  }

componentDidMount(){

    //Get initial Data
    axios.get('http://localhost:8000/aps/')
    .then(res => this.setState({
                APS: res.data.aps,
                currentPosition:res.data.aps,
                apsTime:res.data.datetime
            }))
    .then(
        ()=> {this.setState(()=>{this.convertAPS();})
            this.highTraffic()
            this.getTotalCount()
        }
    )
    .then(
        //function to seed timeslice array
        () => {
            axios.get('http://localhost:8000/minslices/')
            .then(res => this.setState({
                timeslices: res.data
            }))
            .catch(err => console.log(err));
        }
    )
    .then(
        //function to setup demo refresh timer
        () => {
            var refreshTimer = setInterval(this.timer.bind(this), 1500);
            //Store in state to be used later
            this.setState({refreshTimer: refreshTimer});
        }
    )
    .catch(err => console.log(err));

}

componentWillUnmount() {
    clearInterval(this.state.refreshTimer);
}

timer() {
    let MAX_ARRAY_INDEX = this.state.timeslices.length - 1;
    if (this.state.currTimeSliceIndex > MAX_ARRAY_INDEX){
        this.setState({
            currTimeSliceIndex: 0
        })
    }
    //refresh fetch
    axios.get('http://localhost:8000/view/' + this.state.timeslices[this.state.currTimeSliceIndex].id + '/')
    .then(res => this.setState({
                APS: res.data.aps,
                currentPosition:res.data.aps,
                apsTime:res.data.datetime
            }))
    .then(
        ()=> {this.setState(()=>{this.convertAPS();})
            this.highTraffic()
            this.getTotalCount()
        }
    )
    .then(
        this.setState({
            currTimeSliceIndex: this.state.currTimeSliceIndex + 1
        })
    )
    .catch(err => console.log(err));
}


  render() {
    return (

      <Router>

        <ThemeProvider theme={applicationTheme}>
      <div className="App">

        <Grid container direction="row" spacing={1} >
           <Grid item xs={2}>
           <SideBar highest={this.state.HTB}/>
          </Grid>
          <Grid item md={8}>
          <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs>
                  <AppHeader/>
                </Grid>

        <Route exact path="/" render={ props =>(
          <React.Fragment>
                  <HeatMap center={this.state.center} zoom={this.state.zoom} positions={this.state.newPosition} time={this.state.apsTime.substring(11)}/>

          </React.Fragment>
        )}/>
        <Route exact path="/hotspots" render={props => <HotspotPage listOfAPS={this.state.currentPosition} total={this.state.totalCount}/>}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/FAQ" component={FAQ}/>
        </Grid>
        </Grid>
        </Grid>

          </div>
          </ThemeProvider>
          </Router>
    )
  }
}
