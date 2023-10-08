import React from 'react';
import DefaultImage from './UI/defaultImage/DefaultImage';
import '../styles/Resume.css';


function Resume() {
    return (
        <div className='resume'>
            <DefaultImage
                image={'resume.svg'}
                imageSize={512}
                effect={'lens'}
                link='https://www.docdroid.net/x9SWtFa/'
            />
        </div>
    )
}


export default Resume;