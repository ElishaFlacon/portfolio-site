import React, { useState } from 'react';
import classes from './InputForm.module.css';


function InputForm(props) {

    const [inputValue, setInputValue] = useState('');


    return (
        <div className={classes.container}>
            <input
                className={classes.input}
                type="text"
                name={props.name}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    );
}


export default InputForm;