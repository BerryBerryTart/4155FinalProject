<template>
<div id="test">
  <b-row>
    <b-col cols="4">
      <div id="highTrafficNav">
       <b-img thumbnail fluid src="./assets/WifiLogo.png"></b-img>
       <b-card header="High Traffic Areas">
         <b-list-group>
           <b-list-group-item>Atikins</b-list-group-item>
           <b-list-group-item>Colvard</b-list-group-item>
           <b-list-group-item>Woodward</b-list-group-item>
         </b-list-group>
       </b-card>
      </div>
    </b-col>
    <b-col cols="8">
      <b-nav align="center" fill="True" pills="True">
        <b-nav-item to="/" >Home</b-nav-item>
        <b-nav-item active>Live Map </b-nav-item>
        <b-nav-item to="/hotspots">Hot Spots</b-nav-item>
        <b-nav-item>FAQ</b-nav-item>
        <b-nav-item>Contact</b-nav-item>

  </b-nav>  
 
  <router-view :hotspotList='aps' :mapData='aps'/>
    </b-col>
 </b-row> 
</div>
</template>

<script>

//import dataset from './dataset.json'
import axios from 'axios'
import * as d3 from 'd3'


var margin = { top: 10, right: 30, bottom: 30, left: 40},
   width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


export default {
  name: 'app',
  components:{
  },
  data(){
    return{
      aps:[]
    }
  },
  methods:{

    getData(){
      const url = 'http://127.0.0.1:8000/aps/'
      axios.get(url)
      .then(res => this.aps = res.data.aps)
      .catch(err => console.log(err))
    }

  },
  beforeMount(){
    this.getData()

  }
 
  
};
</script>

<style>
 #test{
  margin: 0 auto;
  margin-top: 50px;
  
  width: 980px;
 }

 #highTrafficNav{
   width: 135px;
   margin-left: 15px;
 }

 
</style>
