import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Logo from '../../static/WifiLogo.png'
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        margin:'16px 8px 0px'
    },
    bigAvatar: {
      width: 100,
      height: 60,
      marginLeft: '32px'
    },
  }));

export default function SideBar(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
       <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            >

                <Grid item xs>
                    <Avatar alt="Wifi logo" src={Logo} className={classes.bigAvatar} />
                </Grid>
                <Grid item xs>
                    <List className={classes.root}  subheader={
                        <ListSubheader component="div" id="nested-list-subheader" color="primary">
                        High Traffic Buildings
                        </ListSubheader>
                    } >
                        {props.highest.map((x)=>(
                            <ListItem key={x.building}>
                            <ListItemAvatar>
                            <Avatar>
                            <StarIcon color="secondary"/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={x.building} secondary={"Total Amount of Pings " + x.totalCount} />
                        </ListItem>
                        ))}
                    <h4 style={{color: "#00703c", textAlign: 'center' }}>{props.time}</h4>
                    </List>
                    </Grid>
            </Grid>
        </React.Fragment>
    )
}
