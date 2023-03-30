import React from 'react';
import '../styles/EmailForm.css';
import DefaultImage from './UI/defaultImage/DefaultImage';
import InputForm from './UI/form/InputForm';


function EmailForm(props) {

    const inputs = props.inputs.map((data) => {
        return <InputForm name={data[0]} placeholder={data[1]} />
    });


    return (
        <form className='form' action={props.action} method="POST">

            {inputs}

            <button class="btn" type="submit" name="send" value="button">
                <DefaultImage image={props.buttonImage} imageSize={props.buttonImageSize} effect={props.effect} />
            </button>

        </form>
    );
}


export default EmailForm;