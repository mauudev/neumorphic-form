import React from 'react'


const avatarApiUrl = 'https://xsgames.co/randomusers/avatar.php?g='

const pickRandomGender = () => {
    const genders = ['male', 'female']
    return genders[Math.floor(Math.random() * genders.length)]
}

const Card = ({
    title='Regular user',
    avatarUrl=`${avatarApiUrl + pickRandomGender()}`,
    username,
    email,
    password,
    logged_in,
    created_at,
    updated_at,
    onContactBtnHandler
}) => {

    return (
        <>
            { console.log(`URI: ${avatarUrl}`) }
            <div className='card-content'>
                <img className='user-avatar' src={ avatarUrl }/>
                <h1 className='username-label'>{username}</h1>
                <p className="title">{title}</p>
                <p className='email'>{email}</p>
                <p className='password'>{password}</p>
                <p className='logged_in'>{logged_in}</p>
                <p className='created_at'>{created_at}</p>
                <p className='created_at'>{updated_at}</p>
                <button className='contact-btn' onClick={onContactBtnHandler}>Contact</button>
            </div>
        </>
    )
}

export default Card;
