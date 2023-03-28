import React from 'react';
import classes from './TextImage.module.css';


function TextImage(props) {

    // первое значение в массиве это высота, второе это ширина картинки
    const imageSize = props.imageSize || [256, 768];
    const styles = {
        'max-height': imageSize[0],
        'max-width': imageSize[1],
    };


    return (
        <div className={classes.container}>
            <img
                className={classes.image}
                src={require(`../../../images/${props.image}`)}
                style={styles}
                alt=''
            />
        </div>
    );
}


export default TextImage;