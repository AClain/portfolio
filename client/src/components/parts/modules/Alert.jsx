import React, { useEffect } from 'react';

import './css/alert.css';

import alert_fail from '../../assets/img/alert_fail.png';
import alert_success from '../../assets/img/alert_success.png';

const Alert = (props) => {
    const alertDiv = React.createRef();

    useEffect(() => {
        setTimeout(() => {
            if (alertDiv.current !== null) {
                alertDiv.current.classList.remove('fadeInTop');
                alertDiv.current.classList.add('fadeOut');
            }
        }, 3300);
        setTimeout(() => {
            props.trigger(false);
        }, 4000)
    }, [alertDiv, props]);

    return (
        <div ref={alertDiv} className={`alert alert-${props.type} fadeInTop`}>
            <img src={props.type === 'fail' ? (alert_fail) : (alert_success)}
                alt={`alert-${props.type}`} />{props.message}
        </div>
    )
};

export default Alert;