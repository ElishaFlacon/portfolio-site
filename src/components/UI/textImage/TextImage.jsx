import React from 'react';
import classes from './TextImage.module.css';


function TextImage(props) {


    return (
        <div className={classes.container}>
            <img className={classes.image} src={require(`../../../images/${props.image}`)} alt="" />
        </div>
    );
}


export default TextImage;