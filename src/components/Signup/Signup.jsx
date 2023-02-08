import React from 'react'
import { useState } from 'react'
import { signupFields } from '../../constants/FormFields';
import Input from '../Input/Input';
import Button from '../Buttons/Button';


const fields = signupFields
let fieldsState = {}
fields.forEach(field => fieldsState[field.id] = '')

const Signup = () => {
    const [signupState, setSignupState] = useState(fieldsState)

    const handleChange = (e) => {
        setSignupState({ ...setSignupState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`signup data: ${JSON.stringify(signupState)}`)
    }

    return (
        <div className='form-content'>
            <form className='signup-form' onSubmit={handleSubmit}>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            iconClass={field.iconClass}
                        />
                    )
                }
                <div className='form-control'>
                    <div className='signup-button-container'>
                        <Button
                            type="submit"
                            className="signup-btn"
                            label="Signup"
                            spanClassName="fa fa-signup"
                        >
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;
