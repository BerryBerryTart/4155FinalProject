import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {groupBy} from 'lodash'

const useStyles = makeStyles(theme => ({
    root: {
      width: '70%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function HotspotPage(props) {
    const classes = useStyles();
    const groupedList = groupBy(props.listOfAPS, 'building');
    console.log(groupedList);
    return (
        <React.Fragment>
            <h2 style={{color: "#B3A369" }}> HotSpots </h2>
            <div className={classes.root}>
                {props.listOfAPS.map(x => (
                    <ExpansionPanel key={x.id}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading} color='primary'> {x.building} </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        {x.name + " Traffic Percentage: " + x.count + " out of a toal of " + props.total + " Access point pings" }
                    </Typography>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </div>
        </React.Fragment>
    )
}
