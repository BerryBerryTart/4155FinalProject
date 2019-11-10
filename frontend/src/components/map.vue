<template>
<div id="map">
<!--
  <svg id="circle" height="700" width="700" xmlns="http://www.w3.org/2000/svg">
    <image href="./map.png" width="700" height="700"/>
    <path fill="none" stroke="yellow" stroke-width="3" :d="d"/>
    <circle r="15"
    fill="#5fb"  v-for="(item,index) in dataset"
            :cx="item[0] + 200 "
            :cy="item[1] + 505"
            :key="index"/>
   

   <svg height="700" width="700" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="#2510e4" stroke-width="4" :d='d'/>
  <circle r="10" fill="#f5109c" v-for="(value, index) in dataset" :key="index"
            :cx="value[0]"
            :cy="value[1]"/>

  </svg>
  </svg>
  -->
  <svg  :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
  <g id="svg" :style="{transform: `translate(${margin.left}px, ${margin.top}px)`}">
     <image href="../assets/map.png" width="475" height="500"/>
  </g>
  </svg>
  
</div>
</template>

<script>

//import dataset from './dataset.json'
import convertcsv from '../convertcsv.json'
import * as d3 from 'd3'

var margin = { top: 10, right: 30, bottom: 30, left: 40},
   width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


export default {
  name: 'map',
  data(){
    return{
     //dataset
      margin : { top: 10, right: 30, bottom: 30, left: 40},
      width: 660,
      height: 600,
      dataset:[],
      
      
    };
  },
  methods:{
    

  },
  mounted(){
    
    
          // read data
var data = convertcsv
 var svg = d3.select('#svg')
  // Add X axis
  console.log(data)
  
  var x = d3.scaleLinear()
    .domain([5, 15])
    .range([ margin.left, (width) - margin.right ]);
 

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([5, 25])
    .range([ height - (margin.bottom), margin.top ]);
 

  // Prepare a color palette
  var color = d3.scaleLinear()
      .domain([0, .05]) // Points per square pixel.
      .range(["#ffffff45", "#69b3a215"])

  // compute the density data
  
   var densityData = d3.contourDensity()
    .x(function(d) { return x(d.x ); })
    .y(function(d) { return y(d.y ); })
    .size([width, height])
    .bandwidth(20)(data)
    
    svg.insert("g", "g")
    .selectAll("path")
    .data(densityData)
    .enter().append("path")
      .attr("d", d3.geoPath())
      .attr("fill", function(d) { return color(d.value); })

    console.log(densityData)

  // show the shape!
 

    /*
    const svg = d3.select('#test').append('svg')
                                  .attr('width',"500")
                                  .attr('height',"500")

    const circle = svg.append("circle")
                        .attr('cx',"250")
                        .attr('cy',"250")
                        .attr('fill',"#f5109c")
                        .attr('r',"50")
                        */
  },
  computed:{
    
    
    /*
    lineGenerator(){
      return d3.line()
      .x(v => v[0])
      .y(v => v[1])
      },

      d(){
        return this.lineGenerator(this.dataset)
      }
      */
     
  }
  
};
</script>

<style>
 
#map{
  margin: 0 auto;
  width: 800px;
  
}
svg{
     display: block;
    margin: 0 auto;
}
 
</style>