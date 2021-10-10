import React from 'react';
import companyLogo from '../../static/images/logo.png';
import NavComponent from './nav';

const HeaderComponent = () => {
    return (
        <header>
            <img src={companyLogo} title='Company Logo' alt='company Logo' />
            <NavComponent />
        </header>
    );
};

export default HeaderComponent;
