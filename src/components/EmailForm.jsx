import React, { useState } from 'react';
import '../styles/EmailForm.css';
import DefaultImage from './UI/defaultImage/DefaultImage';
import InputForm from './UI/form/InputForm';


function EmailForm(props) {

    const [submitted, setSubmitted] = useState(false);

    const inputs = props.inputs.map((data) => {
        return <InputForm name={data[0]} placeholder={data[1]} />
    });

    const reloadWindowWhenSubmitted = () => {
        if (!submitted) {
            return;
        }

        window.location.reload();
    }


    return (
        <div>
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                title='none'
                style={{ "display": "none" }}
                onLoad={() => reloadWindowWhenSubmitted()}
            />

            <form className='form' action={props.action} method="POST" target='hidden_iframe' onSubmit={() => setSubmitted(true)}>

                {inputs}

                <button class="btn" type="submit" name="send" value="button">
                    <DefaultImage image={props.buttonImage} imageSize={props.buttonImageSize} effect={props.effect} />
                </button>
            </form>
        </div>
    );
}


export default EmailForm;