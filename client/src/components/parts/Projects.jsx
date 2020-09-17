import React from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import Hidden from '@material-ui/core/Hidden';

// Component's css
import './css/projects.css';

// Project image
import irc from '../assets/img/irc.png';
import musicbank from '../assets/img/musicbank.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    customChip: {
        width: '100%',
        marginBottom: '15px',
        backgroundColor: '#f6f6f6'
    }
}));

const projects = [
    {
        title: 'IRC',
        img: irc,
        github: 'https://github.com/AClain/irc',
        description: "Ce projet a pour but de répliquer le fonctionnement d'un IRC (ou chat instantanné). Il possède une interface graphique ainsi qu'un système de commande pour naviguer entre les salles de discussion.",
        techs: [
            {
                name: 'React',
            },
            {
                name: 'NodeJS',
            },
            {
                name: 'Socket.io',
            }
        ],
        langs: [
            {
                name: 'JavaScript',
            }
        ]
    },
    {
        title: 'MusicBank',
        img: musicbank,
        github: 'https://github.com/AClain/MusicBank',
        description: "MusicBank est un service permettant de rechercher et ajouter des ressources musicales (artistes, albums, etc.) via une API.",
        techs: [
            {
                name: 'React',
            },
            {
                name: 'Symfony 5',
            }
        ],
        langs: [
            {
                name: 'JavaScript',
            },
            {
                name: 'PHP',
            },
            {
                name: 'SQL',
            }
        ]
    }
]

const Projects = () => {
    const classes = useStyles();

    return (
        <Grid container direction='row'
            justify='center' alignItems='center'
            id='projects-container'>
            <Hidden smUp><h2 className='title-strong fadeIn'>Projets</h2></Hidden>
            <Grid item xs={12} id='projects-list' className='fadeInBottom'>
                {projects.map((project, i) =>
                    <div key={i} className='project-card' style={{
                        backgroundImage: 'url(' + project.img + ')'
                    }}>
                        <Grid container direction='row' className='project-card-overlay'>
                            <Grid item xs={12}>
                                <h1 className='project-title'>{project.title}</h1>
                                <p className='project-description'>{project.description}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h3 className='project-tech-title'>Techno(s)</h3>
                                <div className='project-techs'>
                                    {project.techs.map((tech, j) =>
                                        <Chip key={j} label={tech.name} style={{
                                            fontSize: '15px'
                                        }} className={classes.customChip} />
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <h3 className='project-lang-title'>Langage(s)</h3>
                                <div className='project-langs'>
                                    {project.langs.map((lang, j) =>
                                        <Chip key={j} label={lang.name} style={{
                                            fontSize: '15px'
                                        }} className={classes.customChip} />
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <a href={project.github} className='project-card-github'>
                                    <GitHubIcon style={{
                                        fontSize: '50px'
                                    }} />
                                    <p id='github-link'>Consulter</p>
                                </a>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </Grid>
        </Grid>
    )
};

export default Projects;