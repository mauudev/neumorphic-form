import React, { Fragment, useState, useEffect } from 'react';
import Card from '../components/Card/Card'
import axios from 'axios';


function UsersListPage() {
    const [usersInfo, setUsersInfo] = useState({ data: [] })
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/users/',)
            setUsersInfo({ data: result.data })
            return () => console.log("Cleanup..");
        };
        fetchData();
    }, []);

    const contactBtnHandler = () => {
        console.log(`ahh ahh you clicked me !`)
    }

    return (
        <Fragment>
            <div className='cards-container'>
                {
                    usersInfo.data.map(item => (
                        <Card
                            key={item.id}
                            username={item.username}
                            email={item.email}
                            password={item.password}
                            logged_in={item.logged_in}
                            created_at={item.created_at}
                            updated_at={item.updated_at}
                            onContactBtnHandler={contactBtnHandler}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default UsersListPage;
