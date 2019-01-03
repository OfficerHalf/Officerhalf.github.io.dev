import React, { Component } from 'react';
import me from './smithwedding216cropped.jpg';

export default class Photo extends Component {
    public render() {
        const style: React.CSSProperties = {
            borderRadius: '50%',
            height: '250px',
            objectFit: 'cover',
            width: '250px'
        };
        return (
            <img src={me} alt="Nathan Smith" style={style} className="PhotoComponent"/>
        );
    }
}
