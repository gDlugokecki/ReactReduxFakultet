import React from 'react'
import { Link } from 'react-router-dom';
const HeaderJS = () => (
        <header>
            <Link to="/" className="btn btn-primary" >Home</Link>
            <Link to="/about-us" className="btn btn-danger" >About</Link>
        </header>
)
export default HeaderJS