import React from 'react'
import Header from "../components/Header/Header"
import { headerFields } from '../constants/FormFields'
import Signup from "../components/Signup/Signup"

export default function SignupPage() {
    return (
        <>
            <Header
                heading={ headerFields.heading }
                paragraph={ headerFields.paragraph }
                linkName={ headerFields.linkName }
                linkUrl={ headerFields.linkUrl }
            />
            <Signup />
        </>
    )
}