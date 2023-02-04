import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) => {
    return (
        <header className="form-header">
            <img src={logo} className="form-header-logo" alt="logo" />
            <h2>{heading}</h2>
            <p className="signup-legend">
                {paragraph} {' '}
                <Link to={linkUrl} className="signup-url-text">
                    {linkName}
                </Link>
            </p>
        </header>
    )
}

export default Header;