import React, { Component } from 'react';
import max from 'lodash/max';

export default class BarGraph extends Component {
   constructor(props) {
      super(props);
      this.state = {
         averageData: [],
         currentHoverInfo: {
            currentHoverHour: null,
            currentHoverCount: null,
        },
        error: null,
      }
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
   };

   componentDidMount(){
       const name = this.props.apName;
       if(name){
           fetch('http://localhost:8000/average/' + name + '/')
           .then(res => res.json())
           .then((result) => {
                this.setState({
                    averageData: result.averages,
                    currentHoverInfo: {
                       currentHoverHour: result.averages[0].hour,
                       currentHoverCount: result.averages[0].count,
                   },
                    error: null,
                });}
            )
            .catch((error) => {
                this.setState({
                    error: 'ERROR: Failed to fetch.',
                });
            });
        }
   }

   handleMouseEnter(hour, count) {
      this.setState({
         currentHoverInfo: {
            currentHoverHour: hour,
            currentHoverCount: count,
         }
      })
   }

    render() {
        if(this.state.error){
            return null;
        }
        let maxValue = max(this.state.averageData.map(a => a.count));
        return(
            <div style={{width: '300px'}}>
                <div>
                    <DisplayInfo info={this.state.currentHoverInfo}/>
                </div>
                <tr style={{width: '300px'}}>
                    {this.state.averageData.map((barPoint) =>(
                    <Bar
                        key={barPoint.hour}
                        mouseEnter={this.handleMouseEnter}
                        xAxis={barPoint.hour}
                        yAxis={barPoint.count}
                        maxValue={maxValue}
                    />
                    ))}
                </tr>
            </div>
        );
    };
}

function DisplayInfo({info}){
    if(!info){
        return null;
    }
    return (
        <p style={{textAlign: 'center'}}>{info.currentHoverCount} Currently Connected At {info.currentHoverHour}:00</p>
    );
};

function Bar({xAxis, yAxis, maxValue, mouseEnter}) {
   const STYLES = {
      width: '10px',
      height: (yAxis / maxValue) * 150,
      backgroundColor: '#00703c',
      verticalAlign: 'bottom',
      bottom: '0',
      margin: '0px 1px',
   }
   return (
      <React.Fragment>
         <td onMouseEnter={() => {mouseEnter(xAxis, yAxis)}}>
            <div style={STYLES}>
            </div>
         </td>
      </React.Fragment>
   );
};