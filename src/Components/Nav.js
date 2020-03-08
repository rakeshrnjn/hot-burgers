import React from 'react';

const Nav = props => {

    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/#"> Home </a>
                </li>
                <li>
                    <a href="/#"> Menu </a>
                </li>
                <li>
                    <a href="/#"> Gallery </a>
                </li>
                <li>
                    <a href="/#"> Testimonials </a>
                </li>
                <li>
                    <a href="/#"> Contact Us </a>
                </li>
            </ul>
        </nav>
    );

}

export default Nav;