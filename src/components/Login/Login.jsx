import { useState } from 'react';
import { loginFields } from "../../constants/FormFields";
import Input from "../Input/Input"
import Button from "../Buttons/Button"


const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login = () => {
    const [loginState, setLoginState] = useState(fieldsState)

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        authUser()
    }

    const onSocialMediaClick = (e) => {
        e.preventDefault()
        console.log(`social media button pressed! ${e.target}`)
    }

    const authUser = () => {
        console.log(`User authenticated: ${JSON.stringify(loginState)}`)
    }

    return (
        <div className='form-content'>
            <form className='login-form' onSubmit={handleSubmit}>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
                    <div className='login-button-container'>
                        <Button
                            type="submit"
                            className="login-btn"
                            label="Login"
                            spanClassName="fa fa-login"
                        >
                        </Button>
                    </div>
                    <div className='text-divider'>
                        <h2>Or</h2>
                    </div>
                    <div className='social-media'>
                        <Button
                            type="button"
                            className="social-btn"
                            label="Facebook"
                            spanClassName="fa fa-facebook-square"
                        >
                        </Button>
                        <Button
                            type="button"
                            className="social-btn"
                            label="Google"
                            spanClassName="fa fa-google"
                        >
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
