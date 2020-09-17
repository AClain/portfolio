import React from 'react';
import { Link } from 'react-router-dom';
// Material-core
import Grid from '@material-ui/core/Grid';
// Styles
import './css/header.css';
// Files
import github from '../../assets/img/github_empty.png';
import linkedin from '../../assets/img/linkedin_empty.png';

export default function Header(props) {

    return (
        <Grid
            container
            component='header'
            direction='row'
            justify='center'
            alignItems='center'
            id='header'
            className={props.page !== 'contact' ? 'fadeIn' : 'fadeInTop'}>
            {props.page !== 'contact' ? (
                <Grid item sm={12} md={3}>
                    <div id='header-pro-links'>
                        <a href='https://github.com/AClain'
                            className='header-pro-link'>
                            <img alt='Github' title='Github' src={github} />
                        </a>
                        <a href='https://www.linkedin.com/in/alexandre-clain/'
                            className='header-pro-link'>
                            <img alt='LinkedIn' title='LinkedIn' src={linkedin} />
                        </a>
                    </div>
                </Grid>
            ) : (null)}
            <Grid item
                sm={12}
                xs={9}
                className={`header-link-container ${props.page !== 'contact' ? null : 'alignCenter'}`}>
                <div id='header-links'>
                    <Link
                        className='header-link'
                        to='/'>
                        intro
                        </Link>
                    <Link
                        className={`header-link ${props.page === 'competences' ? 'header-link-active' : ''}`}
                        to='/competences'>
                        compétences
                        </Link>
                    <Link
                        className={`header-link ${props.page === 'projets' ? 'header-link-active' : ''}`}
                        to='/projets'>projets</Link>
                    <Link
                        className={`header-link ${props.page === 'contact' ? 'header-link-active' : ''}`}
                        to='/contact'>contact</Link>
                </div>
            </Grid>
        </Grid>
    )
};