import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
               <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Product</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
               
              
            </ul>
           
        </nav>
    );
}
export default Navbar;