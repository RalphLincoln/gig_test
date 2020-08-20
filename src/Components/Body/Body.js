import React, { Component } from 'react'

// IMPORTING CUSTOM CSS
import './body.css';

// IMPORTING PAGES
import Modules from '../../Pages/Modules';
import Test from '../../Pages/Test';

// IMPORTING FROM REACT ROUTER DOM
import { Switch, Route } from 'react-router-dom';

export default class Body extends Component {
    render() {
        return (
            <div className='body-bg'>
                <Switch>
                    <Route exact path='/' component={Modules} />
                    <Route exact path='/test' component={Test} />
                </Switch>
            </div>
        )
    }
}
