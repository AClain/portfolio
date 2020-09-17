import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import './css/frontpage.css'

import github from '../assets/img/github_white.png';
import linkedin from '../assets/img/linkedin_white.png';

export default function Frontpage() {

    return (
        <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            id='frontpage-container'>
            <Grid item xs={10} md={6} id='intro-container'>
                <h2 id='title-frontpage' className='title fadeIn'>CLAIN<br />ALEXANDRE  </h2>
                <h6 className='sub-title fadeInTop'>Développer avec <span className='underline-anim'>passion</span>.</h6>
            </Grid>
            <Grid item container
                direction="row" justify="space-evenly"
                alignItems="center" xs={12} id='menu-container'>
                <Link className='menu-item'
                    to='/competences'>compétences</Link>
                <Link className='menu-item'
                    to='/projets'>projets</Link>
                <Link className='menu-item'
                    to='/contact'>contact</Link>
            </Grid>

            <a href='https://github.com/AClain' className='pro-link fadeIn'>
                <img alt='github' title='Github' src={github} />
            </a>
            <a href='https://www.linkedin.com/in/alexandre-clain/' className='pro-link fadeIn'>
                <img alt='linkedin' title='LinkedIn' src={linkedin} />
            </a>
        </Grid>
    );
};
