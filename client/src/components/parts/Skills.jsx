import React from 'react';

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';

import DevicesIcon from '@material-ui/icons/Devices';
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';

import { makeStyles } from '@material-ui/core/styles';

import './css/skills.css'

const useStyles = makeStyles(() => ({
    chip: {
        fontFamily: 'robotomedium',
        fontWeight: 600,
        fontSize: '16px',
        padding: '0px 25px'
    },
    icon: {
        fontSize: 75,
        color: '#f6f6f6'
    }
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <Grid container
            direction='row'
            justify='center'
            id='skills-container'>
            <Hidden smUp><h2 className='title-strong fadeIn'>Compétences</h2></Hidden>
            <Grid item xs={12} container justify='space-around'>
                <Grid item xs={12} md={10}
                    className='skills-block inner-container'>
                    <DevicesIcon className={classes.icon} />
                    <h1 className='skills-title'>Front-end</h1>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='HTML' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='CSS' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='JavaScript' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='Bootstrap' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='React' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='Material-UI' className={classes.chip} />
                    </div>
                </Grid>

                <Grid item xs={12} md={10}
                    className='skills-block inner-container'>
                    <StorageIcon className={classes.icon} />
                    <h1 className='skills-title'>Back-end</h1>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='PHP' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='Symfony' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='Laravel' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='MySQL' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='MongoDB' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='Socket.io' className={classes.chip} />
                    </div>
                </Grid>

                <Grid item xs={12} md={10}
                    className='skills-block inner-container'>
                    <BuildIcon className={classes.icon} />
                    <h1 className='skills-title'>Environnement</h1>
                    <div className='chip-container fadeInLeft'>
                        <Chip label='Express (NodeJS)' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='Linux' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='npm' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='Composer' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='GitHub' className={classes.chip} />
                    </div>
                    <div className='chip-container fadeInRight'>
                        <Chip label='VSCode' className={classes.chip} />
                    </div>
                </Grid>
            </Grid>
        </Grid >
    )
};

export default Skills;