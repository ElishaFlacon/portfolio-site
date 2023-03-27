import React from 'react';
import classes from './BigImage.module.css';


function BigImage(props) {
    return (
        <div className={classes.container}>
            <img className={classes.bigImage} src={require(`../../../images/${props.bigImage}.png`)} alt="" />
        </div>
    );
}


export default BigImage;