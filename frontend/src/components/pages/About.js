import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Abdul from '../../static/Abdul.jpeg';
import Tristen from '../../static/mine.jpeg';
import Connor from '../../static/connor.jpeg';
import Zuberi from '../../static/Zuberi.png'
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    root1: {
        flexGrow: 1,
        paddingLeft:'32px',
        textAlign:'center'
      },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    bigAvatar: {
        width: 100,
        height: 100,
        margin: '0 auto'
       // marginLeft: '32px'
      },
  }));

export default function About() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.root1}>
                <Grid container>
                    <Grid item xs={12}>
                    
                    <h4>Project Description</h4>
                    <p>This webapp will take the number of MAC addresses 
                    connected to each wireless access point and give a real time description 
                    of how many people are in the general vicinity, giving users a activie 'Heatmap' of campus wifi activity
                    . On the left hand navigation it can show how busy each academic building is by each acess point. In the hotspot tab, we
                    give a list of all the current Buildings, their access points and how many times each one has been pinged.

                </p>
                    
                   
                    </Grid>
                    </Grid>
                
            </div>
            <div className={classes.root}>
                <h2>This project was built by the following developers:</h2>
            <Grid container spacing={3}>
                <Grid item xs={6}> <Paper className={classes.paper} elevation={3}>Tristen Spruill <Avatar alt="Tristen Photo" src={Tristen} className={classes.bigAvatar} variant='square'/>  </Paper></Grid>
                <Grid item xs={6}> <Paper className={classes.paper} elevation={3}>Zuberi Reid <Avatar alt="Zuberi Photo" src={Zuberi} className={classes.bigAvatar} variant='square'/> </Paper></Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}> <Paper className={classes.paper} elevation={3}>Abdul Ahmad <Avatar alt="Abdul Photo" src={Abdul} className={classes.bigAvatar} variant='square'/> </Paper></Grid>
                <Grid item xs={6}> <Paper className={classes.paper} elevation={3}>Connor Kline  <Avatar alt="Connor Photo" src={Connor} className={classes.bigAvatar} variant='square'/></Paper></Grid>
            </Grid>
            </div>
        </React.Fragment>
    );
}