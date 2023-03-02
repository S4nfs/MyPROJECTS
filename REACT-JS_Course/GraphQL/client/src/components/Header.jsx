import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
const Header = () => {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <Link to="/" className='navbar-brand'>
                    <div className="d-flex">
                        <img src={logo} alt="" srcset="" />
                        <div>GraphQl Project</div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header