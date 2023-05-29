import React, { useState } from 'react';
import classes from './BigImage.module.css';


function BigImage(props) {
    const [shake, setShake] = useState('');

    const imageClass = () => {
        if (props.animation) {
            return `
            ${classes.bigImage}
            ${classes.cursor} 
            ${shake}
            `;
        }

        return `${classes.bigImage}`;
    }

    
    return (
        <div className={classes.container}>
            <img
                className={imageClass()}

                src={require(`../../../images/${props.image}`)}
                alt=""

                onClick={() => setShake(classes.shake)}
                onAnimationEnd={() => setShake('')}
            />
        </div>
    );
}


export default BigImage;