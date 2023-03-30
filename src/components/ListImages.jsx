import React from 'react';
import '../styles/ListImages.css';
import DefaultImage from './UI/defaultImage/DefaultImage';


function ListImages(props) {

    const images = props.images.map((data) => {

        if (!Array.isArray(data)) {

            return <DefaultImage image={data} key={data} imageSize={props.imageSize} effect={props.effect} />
        }

        return <DefaultImage image={data[0]} key={data[0]} imageSize={props.imageSize} effect={props.effect} link={data[1]} />
    });


    return (
        <div className='list-images'>
            {images}
        </div>
    );
}


export default ListImages;