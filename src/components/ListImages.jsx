import React from 'react';
import DefaultImage from './UI/defaultImage/DefaultImage';
import '../styles/ListImages.css'


function ListImages(props) {

    const images = props.images.map(e =>
        <DefaultImage image={e} key={e} imgSize={props.imgSize} />
    );


    return (
        <div className='list-images'>
            {images}
        </div>
    );
}


export default ListImages;