import React from 'react'
import Header from "../components/Header/Header"
import { headerFields } from '../constants/FormFields'
import Login from "../components/Login/Login"

export default function LoginPage() {
    return (
        <>
            <div className='user-info-content'>
                <Header
                    heading={headerFields.heading}
                    paragraph={headerFields.paragraph}
                    linkName={headerFields.linkName}
                    linkUrl={headerFields.linkUrl}
                />
                <Login />
            </div>
        </>
    )
}
