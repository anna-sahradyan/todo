import React from 'react';
import s from './NavBar.module.scss';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className={s.nav}>
                <div className={s.logo}><img src="/img/logo.png" alt="" width={30}/><span>Planning easy</span></div>
            <nav className={s.navList} >
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/todo'}>Todo</NavLink>
            </nav>
            </div>
        </>
    );
};

export default Nav;