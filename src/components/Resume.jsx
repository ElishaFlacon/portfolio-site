import React from 'react';
import DefaultImage from './UI/defaultImage/DefaultImage';
import '../styles/Resume.css';

function Resume(props) {
    return (
        <div className='resume'>
            <DefaultImage
                image={props.resumeImage}
                imageSize={512}
                effect={'lens'}
                link={props.resumeLink}
            />
        </div>
    )
}


export default Resume;