import React from 'react';

const TextField = ({type = 'text', placeholder, className, help,error, ...props}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} {...props}/>
        </div>
    );
};

export default TextField;