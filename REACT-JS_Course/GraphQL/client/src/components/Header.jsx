import React from 'react'
import logo from './assets/logo.png'
const Header = () => {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <a href="http://" className='navbar-brand'>
                    <div className="d-flex">
                        <img src={logo} alt="" srcset="" />
                        <div>GraphQl Project</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Header