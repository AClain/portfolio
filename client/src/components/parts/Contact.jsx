import React, { useState } from 'react';
// Material-core
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// Material-icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
// Material-styles
import { makeStyles } from '@material-ui/styles';
// Components
import Alert from './modules/Alert.jsx';
// Styles
import './css/contact.css'
// Scripts
import { init, send } from 'emailjs-com';
import { verifEmail, verifName, verifMessage } from '../assets/js/verif.js';
// Files
import github from '../assets/img/github_white.png';
import linkedin from '../assets/img/linkedin_white.png';
import cv from '../../files/CVClainAlexandre.pdf';

const useStyles = makeStyles(() => ({
    validate: {
        borderColor: '#f6f6f6',
        backgroundColor: 'rgba(0, 121, 68, 0.5)',
        color: '#f6f6f6',
        borderRadius: '25px',
        width: '75%',
        fontSize: '16px',
        padding: '15px 0px',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'rgba(0, 121, 68, 1)',
            borderColor: '#f6f6f6',
        }
    },
    linkButton: {
        color: '#f6f6f6',
        textDecoration: 'none',
        fontFamily: 'robotoblack',
        fontWeight: 900,
        fontSize: '1rem',
        width: '350px',
        padding: '15px 35px',
        borderColor: 'rgba(0, 121, 68, 1)',
        '&:hover': {
            backgroundColor: 'rgba(0, 121, 68, 1)',
            borderColor: '#f6f6f6'
        },
        '& .Mail': {
            border: 'none !important'
        }
    }
}));

export default function Contact() {
    const classes = useStyles();

    const inputName = React.createRef();
    const inputEmail = React.createRef();
    const inputMessage = React.createRef();

    const [errors, setErrors] = useState({
        errorName: true,
        errorEmail: true,
        errorMessage: true
    });

    const [wait, setWait] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendMail = (templateId, infos) => {
        send(
            'gmail', templateId,
            infos
        ).then(res => {
            const now = new Date();
            const item = {
                value: true,
                expiry: now.getTime() + 600000
            };

            localStorage.setItem('waitBeforeSend', JSON.stringify(item));
        });
    };

    const handleSubmit = () => {
        setWait(false);
        const now = new Date();
        init('user_BMrn9Y3npoOEfDcDgF26z');
        const waitBeforeSend = JSON.parse(localStorage.getItem('waitBeforeSend'));

        if (waitBeforeSend !== null && waitBeforeSend.expiry < now) {
            localStorage.removeItem('waitBeforeSend');
        } else if (waitBeforeSend !== null && waitBeforeSend.value) {
            setWait(true)
            return false;
        }

        setErrors({
            errorName: verifName(inputName.current.value),
            errorEmail: verifEmail(inputEmail.current.value),
            errorMessage: verifMessage(inputMessage.current.value)
        });

        if (
            verifName(inputName.current.value) === true &&
            verifEmail(inputEmail.current.value) === true &&
            verifMessage(inputMessage.current.value) === true
        ) {
            const content = inputMessage.current.value;
            const fromEmail = inputEmail.current.value;
            const fromName = inputName.current.value;
            sendMail('template_WaPh7fvM', {
                message_html: content, from_name: fromName, from_email: fromEmail
            });
            setSuccess(true);
            return true;
        };

        return false;

    };

    const download = () => {
        window.open(cv);
    }

    return (
        <Grid container
            direction='row'
            justify='center'
            alignItems='center'
            id='contact-container'
        >
            {wait ? (<Alert type='fail' trigger={setWait} message='Vous ne pouvez pas renvoyer un message avant 10min.' />) : (null)}
            {success ? (<Alert type='success' trigger={setSuccess} message='Votre message a bien été envoyé.' />) : (null)}
            <Grid item xs={12} md={5} id='contact-links'>
                <h2 className='title-contact fadeInTop'>liens utiles</h2>
                <a href='https://github.com/AClain' className='contact-link fadeInFirst'>
                    <Button title='Vers Github' variant="outlined" className={classes.linkButton}>
                        <img className='img-fluid' src={github} alt='github-logo' />
                        Github
                    </Button>
                </a>
                <a href='https://www.linkedin.com/in/alexandre-clain/' className='contact-link fadeInSecond'>
                    <Button title='Vers LinkedIn' variant="outlined" className={classes.linkButton}>
                        <img className='img-fluid' src={linkedin} alt='linkedin-logo' />
                        LinkedIn
                    </Button>
                </a>
                <a href='#contact' className='contact-link fadeInThird'>
                    <Button title='Télécharger mon C.V.' onClick={download}
                        variant="outlined" className={classes.linkButton}>
                        <GetAppIcon className='img-fluid' />
                        Télécharger mon C.V.
                    </Button>
                </a>
                <span className='contact-link fadeInFourth'>
                    <Button title='Ecrire à cette adresse' variant="outlined" className={`${classes.linkButton} Mail`}>
                        <MailOutlineIcon className='img-fluid' />
                        alexandre.clain@epitech.eu
                    </Button>
                </span>
            </Grid>
            <Grid item xs={12} md={5} id='contact-form'>
                <h2 className='title-contact fadeInTop'>par mail</h2>
                <form method='POST' action='/'>
                    <div className='input-container fadeInFirst'>
                        <input type='text' ref={inputName}
                            placeholder='Nom*'
                            className={`text-input ${errors.errorName !== true ? 'error-input' : ''}`} />
                        {errors.errorName !== '' ? (<span className='error'>{errors.errorName}</span>) : (null)}
                    </div>
                    <div className='input-container fadeInSecond'>
                        <input type='text' ref={inputEmail}
                            placeholder='Adresse mail*'
                            className={`text-input ${errors.errorEmail !== true ? 'error-input' : ''}`} />
                        {errors.errorEmail !== '' ? (<span className='error'>{errors.errorEmail}</span>) : (null)}
                    </div>
                    <div className='input-container fadeInThird'>
                        <textarea ref={inputMessage}
                            placeholder='Message*'
                            className={`textarea-input ${errors.errorMessage !== true ? 'error-input' : ''}`}></textarea>
                        {errors.errorMessage !== '' ? (<span className='error'>{errors.errorMessage}</span>) : (null)}
                    </div>
                    <Button onClick={handleSubmit} variant="outlined" size="large" className={`${classes.validate} fadeInFourth`}>
                        Envoyer
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
};