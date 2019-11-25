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

export default function SideBar() {
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
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                        <StarIcon color="secondary"/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Building" secondary="Atkins" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                        <StarIcon color="secondary"/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Building" secondary="Kennedy" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                        <StarIcon color="secondary"/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Building" secondary="Woodward" />
                    </ListItem>
                    </List>
                    </Grid>
            </Grid>
        </React.Fragment>
    )
}
