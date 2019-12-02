import React from 'react'
import { Paper } from '@material-ui/core'




export default function FAQ() {
    return (
        <React.Fragment>
            <h2 style={{color: "#00703c" }}> FAQ </h2>
            <div>
                <Paper style={{padding:'16px'}} elevation={6}>
                <p style={{color: "#B3A369" }}>Home: The main page where the Heatmap of campus activity resides</p>
                <p>Hotspot: List of the buildings that are most curruntly active and their Access Points</p>
                <p style={{color: "#B3A369" }}>About: Description of project and list of people who worked on it</p>
                <p>Side Navigation Bar: The highest pinged access points and thier associated building</p>
                </Paper>
            </div>
        </React.Fragment>
    )
}
