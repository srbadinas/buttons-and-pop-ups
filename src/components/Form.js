import { useState } from 'react';

import Input from './Input';
import Button from './Button';

function Form({formContent, onSubmit}) {

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

    const onFormChange = (i, e) => {
        let data = [...inputFields];
        data[i]['value'] = e.target.value;
        setInputFields(data);
    }

    const onAnswerSubmit = (i) => {
        let data = [...inputFields];
        if (data[i]['correctAnswer'].toLowerCase() === data[i]['value'].toLowerCase()) {
            data[i]['isCorrect'] = true;
        } else {
            data[i]['attempts']++;
            data[i]['wrongAnswer'] = true;
        };
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