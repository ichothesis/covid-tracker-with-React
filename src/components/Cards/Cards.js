import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import classes from './Cards.module.css';

const cards = (props) =>{
    //console.log(props.data);
    let inf=0;
    let rec=0;
    let dea=0;
    if(props.data.confirmed){
        inf=props.data.confirmed.value;
        rec=props.data.recovered.value;
        dea=props.data.deaths.value;
    }
    return(
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={inf} duration={2.5} separator='.'/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">The Number of Infections By Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.recovered)}>                    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={rec} duration={2.5} separator='.'/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">The Number of Recoveries By Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.deaths)}>                    
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={dea} duration={2.5} separator='.'/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">The Number of Deaths By Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default cards;