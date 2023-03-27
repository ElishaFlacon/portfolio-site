import React from 'react';
import ListImages from './ListImages';
import TextImage from './UI/textImage/TextImage';


function Tools(props) {

    return (
        <div className='tools'>

            <TextImage image={props.textImage} />
            {/* <img src={require(`../images/${props.text}`)} alt="" /> */}

            <div className="tools__container">

                <ListImages images={props.images} />

            </div>

        </div>
    );
}


export default Tools;