import React from 'react';
import '../styles/DoNot.css';
import TextImage from './UI/textImage/TextImage';


function DoNot(props) {
    return (
        // old <div className='do-not' onClick={() => props.onChangeChaos()}>
        <div
            className={`do-not ${props.chaos}`}
            onClick={() => props.onChangeChaos()}
            onAnimationEnd={() => props.onChangeChaos()}
        >
            <TextImage image={props.image} imageSize={props.imageSize} />
        </div >
    );
}


export default DoNot;