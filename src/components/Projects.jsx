import React from 'react';
import '../styles/Blocks.css'
import ListImages from './ListImages';
import TextImage from './UI/textImage/TextImage';


function Projects(props) {


    return (
        <div className='projects'>

            <TextImage image={props.textImage} imageSize={props.textImageSize} />

            <div className="projects__container">

                <ListImages images={props.images} effect={props.effect} imageSize={props.defaultImageSize} />

            </div>

        </div>
    );
}


export default Projects;