import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li className='bg-red-200'>
                        <Link to="/">Home</Link>
                    </li>
                    <li  className='bg-green-200'>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header