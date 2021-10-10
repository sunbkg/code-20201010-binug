import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AboutUsComponent from './components/about';
import HeaderComponent from './components/header';
import HomePage from './components/home/index';
import LocationComponent from './components/location';
import ServicesComponent from './components/services';

const Routes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <HeaderComponent />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/service' component={ServicesComponent} />
                    <Route path='/location' component={LocationComponent} />
                    <Route path='/about' component={AboutUsComponent} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Routes;

