import { FaAlignJustify } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import './header.css'
import { Link } from "react-router-dom";

function Header () {

    const [menuToggle, setMenuToggle] = useState(false);

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    const [navColor, setNavColor] = useState(false);

    const changeNavColor = () => 
    {

    if (window.scrollY>=100) {setNavColor(true);}
else
        {setNavColor(false);}}

        window.addEventListener('scroll',changeNavColor)


    return (
        <> 
        <div className= {navColor? "heading heading-active": "heading" }>
       
           

        <h1><a href="/">Bamidele's Portfolio</a></h1>

        <nav className="nav-list">
            <div className={menuToggle?  "list-group active":"list-group"}>
            <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/projects">Projects</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            </ul>
            </div>
            <div className="hamburger"onClick={toggleMenu}>
                {menuToggle ? <IoMdClose /> :<FaAlignJustify /> }
            
             </div>

        </nav>
        
        
       
         </div>
        </>
    )
}

export default Header;