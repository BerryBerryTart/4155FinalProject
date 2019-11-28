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
    constructor(){
        super();
        this.state = {
          timeslices:[],
          currentPosition:[],
          center: {
            lat: 35.3058,
            lng: -80.7324
          },
          zoom: 15
        }
    }

  componentDidMount(){
    axios.get('http://localhost:8000/timeslices/')
    .then(res => this.setState({timeslices: res.data, currentPosition:res.data[0].aps}))
    .catch(err => console.log(err))

    console.log(this.state.currentPosition)
  }

  convertAPS = () =>{
    this.setState({currentPosition: this.setState.currentPosition.map(aps => {

    })})
  }

  render() {
    return (
      
      <Router>
        
        <ThemeProvider theme={applicationTheme}>
      <div className="App">

        <Grid container direction="row" spacing={1} >
           <Grid item xs={2}>
           <SideBar/>
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
                  <HeatMap center={this.state.center} zoom={this.state.zoom}/>
          </React.Fragment>
        )}/>
        <Route exact path="/hotspots" component={HotspotPage}/>
        <Route exact path="/about" component={About}/>
        </Grid>
        </Grid>
        </Grid>

          </div>
          </ThemeProvider>
          </Router>
    )
  }
}
