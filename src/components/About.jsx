import React from 'react';
import BigImage from './UI/bigImage/BigImage';


function About(props) {


    return (
        <div className='about'>
            <BigImage image={props.image} />
        </div>
    );
}


export default About;