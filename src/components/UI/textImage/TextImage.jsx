import React from 'react';
import classes from './TextImage.module.css';


function TextImage(props) {
    // первое значение в массиве это высота, второе это ширина картинки
    const imageSize = props.imageSize || [256, 768];
    const styles = {
        maxHeight: imageSize[0],
        maxWidth: imageSize[1],
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