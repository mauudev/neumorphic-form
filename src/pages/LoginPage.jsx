import React from 'react'
import Header from "../components/Header/Header"
import { headerFields } from '../constants/FormFields'
// import Login from "../components/Login"

export default function LoginPage() {
    return (
        <>
            <Header
                heading={ headerFields.heading }
                paragraph={ headerFields.paragraph }
                linkName={ headerFields.linkName }
                linkUrl={ headerFields.linkUrl }
            />
            {/* <Login /> */}
        </>
    )
}