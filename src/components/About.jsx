import React from 'react';
import '../styles/About.css';
import BigImage from './UI/bigImage/BigImage';


function About(props) {
    return (
        <div className='about'>
            <BigImage image={props.images[0]} />
            <BigImage image={props.images[1]} animation={true} />
        </div>
    );
}


export default About;