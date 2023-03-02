import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <FaExclamationTriangle size='5rem' />
                <h4>404</h4>
                <p className="lead">Sorry! Not Found.</p>
                <Link to='/'>Go Back</Link>
            </div>
        </>
    )
}

export default NotFound