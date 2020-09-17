import React from 'react';
import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
} from 'react-transition-group';

// Components
import Overlay from './components/parts/Overlay';
import Frontpage from './components/parts/Frontpage';
import Skills from './components/parts/Skills';
import Projects from './components/parts/Projects';
import Contact from './components/parts/Contact';

function Router({ location }) {
    return (
        <>
            <Overlay />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 400, exit: 400 }}
                    classNames="fade">
                    <Switch>
                        <Route path='/' exact component={Frontpage} />
                        <Route path='/competences' exact component={Skills} />
                        <Route path='/projets' exact component={Projects} />
                        <Route path='/contact' exact component={Contact} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default withRouter(Router);