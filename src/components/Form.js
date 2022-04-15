import { useState } from 'react';

import Input from './Input';
import Button from './Button';

function Form({formContent, onSubmit}) {

    const [ inputFields, setInputFields ] = useState(
        formContent.map((el, i) => {
            return {
                id: i,
                name: el.name.toLowerCase().replace(' ', '-'),
                value: '',
            };
        })
    );

    const onFormChange = (i, e) => {
        let data = [...inputFields];
        data[i]['value'] = e.target.value;
        setInputFields(data);
    }

  return (
    <form onSubmit={(e) => onSubmit(e, inputFields) }>
        { formContent.map((el, i) => {
            return (
                <div key={el.id} className="form-control" style={ formControlStyle }>
                    <label style={ formLabelStyle }>{ el.name }</label>
                    {
                        (<Input type={el.type} name={el.name.toLowerCase().replace(' ', '-')} onChange={(e) => onFormChange(i, e) } />) 
                    }
                </div>
            );
        }) }
        <Button text="Submit" type="submit"/>
    </form>
  )
}

const formControlStyle = {
    marginBottom: '1rem'
}

const formLabelStyle = {
    display: 'block'
}
const formTextFieldStyle = {}

export default Form