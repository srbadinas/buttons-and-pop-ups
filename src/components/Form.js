import { useState } from 'react';

import Input from './Input';
import Button from './Button';

function Form({formContent, onSubmit}) {

    // Stores the fields into a component-level state variable that comes from the formContent in the App.js
    const [ inputFields, setInputFields ] = useState(
        formContent.map((el, i) => {
            return {
                id: i,
                displayName: el.name,
                name: el.name.toLowerCase().replace(' ', '-'),
                value: '',
                correctAnswer: el.correctAnswer,
                isCorrect: false,
                wrongAnswer: false,
                attempts: 0,
            };
        })
    );

    /**
     * Executes when the user types in the text fields
     * @param {*} i gets the index of the field
     * @param {*} e gets the on change event of the text field
     */
    const onFormChange = (i, e) => {
        // stores the inputFields into a variable.
        let data = [...inputFields];

        // Sets the value of the field by finding the index of the field.
        data[i]['value'] = e.target.value;

        // Sets the updated inputField variable.
        setInputFields(data);
    }

    /**
     * Checks if the entered value on the field is the correct answer.
     * If the answer is wrong, it'll increase the number of attempts.
     * @param {*} i gets the index of the field 
     */
    const onAnswerSubmit = (i) => {

        // stores the inputFields into a variable.
        let data = [...inputFields];

        /**
         * Check if the answered question is equals to the correct answer.
         * The answer is not case sensitive because of toLowerCase() function.
         * The i parameter determines the correct object that we want to manipulate.
         * If the answer is correct it'll set the isCorrect property into true.
         * If the answer is not correct, it'll increase the number of attempts and sets the wrongAnswer property to true.
         * If the wrongAnswer property is true, the label "Wrong Answer" will be displayed at the bottom of the text field.
         */
        if (data[i]['correctAnswer'].toLowerCase() === data[i]['value'].toLowerCase()) {
            data[i]['isCorrect'] = true;
        } else {
            data[i]['attempts']++;
            data[i]['wrongAnswer'] = true;
        };

        // Sets the updated inputField variable.
        setInputFields(data);
    }

  return (
    <form onSubmit={(e) => onSubmit(e, inputFields) }>
        { inputFields.map((el, i) => {
            return (
                <div key={el.id} className="form-control" style={ formControlStyle }>
                    <label style={ formLabelStyle }>{ el.displayName }</label>
                    {
                        (el.isCorrect ? el.value :  (
                            <Input type={el.type} name={el.name.toLowerCase().replace(' ', '-')} onChange={ (e) => onFormChange(i, e) } wrongAnswer={el.wrongAnswer}/>))
                    }
                    <Button text="Submit" type="button" style={{ marginLeft: '.5rem', display: (el.isCorrect && 'none') }} onClick={ (e) => onAnswerSubmit(i) }/>
                    <span style={{marginLeft: '1rem'}}>Attempt(s): {el.attempts}</span>
                </div>
            );
        }) }
        <Button text="Submit Form" type="submit"/>
    </form>
  )
}

const formControlStyle = {
    marginBottom: '1rem'
}

const formLabelStyle = {
    display: 'block'
}
export default Form