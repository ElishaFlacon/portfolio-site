import React from 'react';
import '../styles/DoNot.css';
import TextImage from './UI/textImage/TextImage';


function DoNot(props) {


    return (
        <div div className='do-not' onClick={() => props.onChangeChaos()}>
            <TextImage image={props.image} imageSize={props.imageSize} />
        </div >
    );
}


export default DoNot;