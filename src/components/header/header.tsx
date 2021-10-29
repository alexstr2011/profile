import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as LogoIcon} from '../../images/Logo_imi_horizontal.svg';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <LogoIcon className={styles.logo}/>
            <nav>
                <NavLink className={styles.link} to="/" exact>Form</NavLink>
                <NavLink className={styles.link} to="/preview" exact>Preview</NavLink>
            </nav>
        </header>
    );
};

export default Header;
