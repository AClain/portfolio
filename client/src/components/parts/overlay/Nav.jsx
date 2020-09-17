import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import NotesIcon from '@material-ui/icons/Notes';
import CloseIcon from '@material-ui/icons/Close';

import './css/nav.css';

import github from '../../assets/img/github_empty.png';
import linkedin from '../../assets/img/linkedin_empty.png';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: '#f6f6f6',
        fontSize: '50px',
        zIndex: '99999'
    },
    closeIcon: {
        color: '#f6f6f6',
        fontSize: '35px',
        zIndex: '99999'
    }
}));

const Nav = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const menu = React.createRef();
    const opacityLayout = React.createRef();

    const openMenu = () => {
        setOpen(true);
    };

    const closeMenu = () => {
        if (menu.current !== null) {
            menu.current.classList.remove('fadeInAll');
            menu.current.classList.add('fadeOutAll');
        };
        if (opacityLayout.current !== null) {
            opacityLayout.current.classList.remove('fadeIn');
            opacityLayout.current.classList.add('fadeOut');
        };
        setTimeout(() => {
            setOpen(false);
        }, 700)
    };

    return (
        <>
            {open ? (null) : (
                <NotesIcon onClick={openMenu} className={`${classes.icon} fadeInTop`} />
            )}
            {open ? (
                <Grid container direction='row' id='phone-menu-container'>
                    <aside id='phone-menu' className='fadeInAll' ref={menu}>
                        <div id='close-menu'>
                            <CloseIcon onClick={closeMenu} className={classes.closeIcon} />
                        </div>
                        <div id='menu-container'>
                            <Link className='menu-link'
                                to='/'>intro</Link>
                            <Link className='menu-link'
                                to='/competences'>compétences</Link>
                            <Link className='menu-link' href='/'
                                to='/projets'>projets</Link>
                            <Link className='menu-link'
                                to='/contact'>contact</Link>
                        </div>
                        <div id='links-container'>
                            <a href='https://github.com/AClain'
                                className='menu-pro-link'>
                                <img alt='Github' title='Github' src={github} />
                            </a>
                            <a href='https://www.linkedin.com/in/alexandre-clain/'
                                className='menu-pro-link'>
                                <img alt='LinkedIn' title='LinkedIn' src={linkedin} />
                            </a>
                        </div>
                    </aside>
                    <aside id='opacity-container' onClick={closeMenu} className='fadeIn' ref={opacityLayout}></aside>
                </Grid>
            ) : (null)}
        </>
    )
};

export default Nav;