import React from 'react';
import "./style.css";

const Event = (props) => {
    return (
        <div className='event'>
            <div className='event_image'>
                <img src={props.src} alt="event_image" />
            </div>
            <div className='event_info'>
                <h5>{props.title}</h5>
            </div>
        </div>
    );
};

export default Event;