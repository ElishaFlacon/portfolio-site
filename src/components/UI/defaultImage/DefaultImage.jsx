import React from 'react';
import classes from './DefaultImage.module.css';


function DefaultImage(props) {

    const imgSize = props.imageSize || 128;

    const styles = {
        'max-width': imgSize,
        'max-height': imgSize,
    };


    const checkEffect = (state) => {
        switch (state) {
            case 'rotate':
                return classes.rotate;
            case 'lens':
                return classes.lens;
            default:
                break;
        };
    };

    const imageClass = `
        ${classes.image} 
        ${checkEffect(props.effect)}
    `;


    const returnedObject = (link) => {
        if (!link) {
            return (
                <div className={classes.container}>
                    <img className={imageClass} src={require(`../../../images/${props.image}`)} style={styles} alt="" />
                </div>
            );
        }

        return (
            <div className={classes.container}>
                <a href={link}>
                    <img className={imageClass} src={require(`../../../images/${props.image}`)} style={styles} alt="" />
                </a>
            </div>
        );
    }

    return (
        returnedObject(props.link)
    );
}


export default DefaultImage;