import React from 'react';
import classes from './Nav.module.css';
import logo from '../../assets/images/logo.png';

function Nav(props) {
    return (
        <div className={classes.nav}>
            <div className={classes.nav__blocks}>
                <img src={logo}></img>
            </div>

            <div className={classes.nav__blocks}></div>
            <div className={classes.nav__blocks}></div>
        
        </div>
    );
}

export default Nav;