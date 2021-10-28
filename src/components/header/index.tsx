import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" exact>Form</NavLink>
            <NavLink to="/preview" exact>Preview</NavLink>
        </nav>
    );
};

export default Header;
