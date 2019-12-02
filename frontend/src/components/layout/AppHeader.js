import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


 // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591



export default function AppHeader({handleHeatmapClick, handleAwayClick}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
      <Paper elevation={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          centered
        >
          <Tab label="Home" component={Link} to="/" onClick={handleHeatmapClick}/>
          <Tab label="Hotspot" component={Link} to="/hotspots" onClick={handleAwayClick}/>
          <Tab label="FAQ" component={Link} to="/FAQ" onClick={handleAwayClick}/>
          <Tab label="About" component={Link} to="/about" onClick={handleAwayClick}/>
        </Tabs>
      </Paper>
    )
}
