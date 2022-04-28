import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Menu = (props) => {
    const listOfItems = props.content.map((item) => 
        <li>
            <Link className='link' to="/">{item}</Link>
        </li>
    );
    return (    
        <div className='menu'>
            <h3>{props.title}</h3>
            {listOfItems}
        </div>
    );
};

export default Menu;