import React from 'react';
import './searchBox.styles.css';

export const SearchBox = (props) => {
    return (
        <div className="search">
        <input type="text" placeholder={props.placeholder} onChange={props.handleChange} />
        </div>
    );
};