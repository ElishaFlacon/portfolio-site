import React from 'react';
import '../styles/Tools.css';
import ListImages from './ListImages';
import TextImage from './UI/textImage/TextImage';


function Tools(props) {


    return (
        <div className='tools'>

            <TextImage image={props.textImage} imageSize={props.textImageSize} />

            <div className="tools__container">

                <ListImages images={props.images} effect={props.effect} imageSize={props.defaultImageSize} />

            </div>

        </div>
    );
}


export default Tools;