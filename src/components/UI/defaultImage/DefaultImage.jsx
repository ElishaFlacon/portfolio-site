import React from 'react';
import classes from './DefaultImage.module.css';


function DefaultImage(props) {

    const imgSize = props.imgSize || 128;

    const sizeStyle = {
        'max-width': `${imgSize}px`,
        'max-height': `${imgSize}px`
    };


    return (
        <div className={classes.container}>
            <img className={classes.image} src={require(`../../../images/${props.image}`)} style={sizeStyle} alt="" />
        </div>
    );
}


export default DefaultImage;