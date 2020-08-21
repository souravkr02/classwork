import React from 'react';
import {Link } from 'react-router-dom';
import pic from './download.jpg';
import Table from './Table'

const User = () => {
    const showData = () => {
        return (
            <>
            <Table />
            </>
        )
    }
    return(
    <>
    <h1>User Page</h1>
    <img src={pic} />
    <button><Link className="nav-link "to="/table">Fetch Data</Link></button>

    </>)
}

export default User;