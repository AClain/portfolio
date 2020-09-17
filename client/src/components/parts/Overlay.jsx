import React from 'react';
import { withRouter } from 'react-router-dom';

import './css/overlay.css'

import Header from './overlay/Header'
import Nav from './overlay/Nav';
import Hidden from '@material-ui/core/Hidden';

const Overlay = (props) => {
    console.log(props);
    const pathName = props.location.pathname.slice(1);

    return (
        <>
            {pathName !== '' ? (
                <aside id='overlay'>
                    <Hidden smUp>
                        <Nav page={pathName} />
                    </Hidden>
                    <Hidden xsDown>
                        <Header page={pathName} />
                    </Hidden>
                </aside>
            ) : (null)}
        </>
    )
}

export default withRouter(Overlay);