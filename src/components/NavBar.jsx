import React from 'react'

const NavBar = () => {
    return (
        <header className='navbar'>
            <div className='inner'>
                <a href="logo" href="#hero">
                    Riddhi Chavan
                </a>
                <nav className='desktop'>

                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar