import React from 'react';
import '../styles/Blocks.css';
import TextImage from './UI/textImage/TextImage';
import DefaultImage from './UI/defaultImage/DefaultImage';
import EmailForm from './EmailForm';


function FindMe(props) {


    return (
        <div className='find'>

            <div className="find__gh-container">

                <TextImage image={props.textImage} imageSize={props.textImageSize} />
                <DefaultImage image={props.defaultImage} imageSize={props.defaultImageSize} effect={props.effect} link={props.link} />

            </div>

            <div className="find__form-container">

                <EmailForm

                    action={props.action}
                    inputs={props.inputs}

                    buttonImage={props.buttonImage}
                    buttonImageSize={props.buttonImageSize}
                    effect={props.buttonEffect}

                />

            </div>

        </div>
    );
}


export default FindMe;