import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                <ul className=" ul.navbar__left">
                <div className="navbar__left-logo">
                    <img src="https://th.bing.com/th/id/OIP.FMwgLyZ1RixpM0ZZdwhvUQHaEK?w=321&h=180&c=7&o=5&dpr=1.5&pid=1.7" alt="logo"/>
                </div>
            </ul>
            <ul className="navbar__right">
                <li>
                    <a href="">How it Works</a>
                </li>
                <li>
                    <a href="">club</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li><a href="">Home</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Blog</a></li>
            </ul>
                </div>

            </div>
        </nav>
    )
}

export default Nav
