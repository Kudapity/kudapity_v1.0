import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "../styles/styleLayout.css"
import "../styles/style.css"

const Layout = () => {
    return (
        <div className={'container'}>
            <header>
                <div className={'layout_image'}>
                    <Link to='/'>
                        <img src={require('../img/logo_transparent.png')} alt='photo isn`t exist'/>
                    </Link>
                </div>
                <div>
                    <Link to={'/logIn'} className={'layout_link login'}>
                        Увійти |
                    </Link>
                    <Link to='/signUp' className={'layout_link signup'}>
                        Зареєстуватись
                    </Link>
                </div>

            </header>
            <Outlet/>
        </div>

    );
};

export default Layout;