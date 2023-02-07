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
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-content'>
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
                        />
                    )
                }
            </div>
            <div className='submit-control'>
                <Button
                    type="submit"
                    className="login-btn"
                    label="Login"
                    spanClassName="fa fa-login"
                >
                </Button>
            </div>
            <div className='or'>Or</div>
            <div className='social-media'>
                <div className='social-btn-container'>
                    <Button
                        onClick={onSocialMediaClick}
                        type="button"
                        className="social-btn"
                        spanClassName="fa fa-facebook"
                        label="Facebook"
                    >
                    </Button>
                    <Button
                        onClick={onSocialMediaClick}
                        type="button"
                        className="social-btn"
                        label="Google"
                        spanClassName="fa fa-google"
                    >
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default Login;
