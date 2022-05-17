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
                    <Link to='/' className='view_all_event'>
                        VIEW ALL EVENTS
                    </Link>
                    <Link to='/' className='add_event'>
                        ADD EVENT
                    </Link>
                    <Link to={'/logIn'} className={'layout_link1 login'}>
                        LOG IN |
                    </Link>
                    <Link to='/signUp' className={'layout_link2 signup'}>
                        SING UP
                    </Link>
                </div>

            </header>
            <Outlet/>
        </div>

    );
};

export default Layout;