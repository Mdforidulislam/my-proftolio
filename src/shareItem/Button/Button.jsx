import React from 'react';
import './style.css'
const Button = ({title,width}) => {
    return (
        <div>
            <button className='glow-on-hover ' style={{width:`${width}`}}>{title}</button>
        </div>
    );
};

export default Button;