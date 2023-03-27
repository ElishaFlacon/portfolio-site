import React from 'react';
import BigImage from './UI/bigImage/BigImage';


function About(props) {


    return (
        <div className='about'>
            <BigImage bigImage={props.bigImage} />
        </div>
    );
}


export default About;