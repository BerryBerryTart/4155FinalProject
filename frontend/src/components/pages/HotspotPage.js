import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import groupBy from 'lodash/groupBy';
import BarGraph from '../BarGraph/BarGraph';


const useStyles = makeStyles(theme => ({
    root: {
      width: '70%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expansonSum:{
        display:'inline-block',
        //borderBottom:'2px black solid'
    },
    averageExpansion:{
        padding: '5px',
    }
  }));

export default function HotspotPage(props) {
    const [currAP, setCurrAP] = useState('')
    const handleOnClick = (eventData) => {
        setCurrAP(eventData);
        console.log(currAP);
    };

    const classes = useStyles();
    var apList = props.listOfAPS;
    apList.forEach((item) => {if (item.building in BUILDINGMAP) item.building = BUILDINGMAP[item.building]})
    const groupedList = groupBy(apList, 'building');
    return (
        <React.Fragment>

            <h2 style={{color: "#B3A369" }}> HotSpots </h2>
            <div className={classes.root}>
                {Object.keys(groupedList).map((key) => (

                    <ExpansionPanel key={key}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography className={classes.heading} color='primary'> {key} </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails TransitionProps={{ unmountOnExit: true }}>
                        <ul style={{listStyleType: "none", padding: '0px'}}>
                        {groupedList[key].map(ap => (
                            <li
                                key={ap.id}
                                style={{textAlign:'left', margin:'0px 8px', width: '298px'}}
                                className={classes.expansonSum}
                            >
                                <Typography >
                                {"AP Name: " + ap.name}
                                </Typography>
                                <Typography color='primary' style={{margin:'0px 5px'}} >
                                {"Current Connected Users: " + ap.count}
                                </Typography>
                        <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography className={classes.heading} color='primary'>Average Activity</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.averageExpansion}>
                            <BarGraph apName={ap.name}/>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                                <br />
                                <hr/>
                            </li>

                        ))}
                        </ul>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>

                ))}
            </div>
        </React.Fragment>
    )
}

const BUILDINGMAP = {
    "Atki": "Atkins Library",
    "AtkiG": "Atkins Library",
    "AtkiL": "Atkins Library",
    "Band": "Johnson Band Center",
    "BandCor": "Johnson Band Center",
    "Barn": "Barnard",
    "BelG": "Belk Gym",
    "BelGGym": "Belk Gym",
    "BelGMain": "Belk Gym",
    "BelGPool": "Belk Gym",
    "BelGRB": "Belk Gym",
    "BelH": "Belk Hall",
    "Bioi": "Bioinformatics",
    "BioiVEST": "Bioinformatics",
    "Burs": "Burson",
    "BursBOIL": "Burson",
    "CRI": "CRI",
    "Came": "Cameron Hall",
    "Cato": "Cato Hall",
    "Ceda": "Cedar Hall",
    "CoEd": "College Of Education",
    "Colv": "Covald",
    "Cone": "Cone Center",
    "Coun": "Price Counseling Center",
    "Denn": "Denny",
    "Duke": "Duke Hall",
    "EPIC": "Epic Building",
    "EPICG": "Epic Building",
    "Fret": "Fretwell",
    "Frid": "Friday",
    "Gari": "Garinger Building",
    "Grig": "Grigg Hall",
    "Heal": "College Of Health And Human Services",
    "HealCOR": "College Of Health And Human Services",
    "Hick": "Hickory Hall",
    "Hous": "Housing and Residence Life",
    "HunH": "Hunt Hall",
    "Kenn": "Kennedy",
    "King": "King",
    "Laur": "Laurel Hall",
    "Levi": "Levine Hall",
    "Lync": "Lynch Hall",
    "MSII": "Motorsports Research",
    "Macy": "Macy",
    "Mart": "Martin Hall",
    "McEn": "McEniry",
    "McMi": "McMillan Greenhouse",
    "Memo": "Memorial Hall",
    "MilH": "Miltimore Hall",
    "MiltA": "Miltimore‐Wallis Center",
    "Moto": "Motorsports Research",
    "PORT": "PORTAL",
    "PORTCOR": "PORTAL",
    "PROS": "Prospector",
    "Pros": "Prospector",
    "Rees": "Reese",
    "Robi": "Robinson Hall",
    "Rowe": "Rowe",
    "Smit": "Smith",
    "Stor": "Storrs",
    "StorCOR": "Storrs",
    "Storr": "Storrs",
    "StuA": "Student Activities Center",
    "StuH": "Student Health Center",
    "StuU": "Student Union",
    "SVDH": "South Village Dining Hall",
    "Winn": "Winningham",
    "With": "Witherspoon",
    "Wood": "Woodward"
}