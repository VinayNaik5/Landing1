import React, {useState} from "react";
import "./NavBar.css"
import { FiX, FiMenu} from "react-icons/fi"


const NavBar = ({navBarLinks})=>{
    const [menuClicked,setMenuClicked] = useState(false)
    const toggleMenuClick = () =>{
        setMenuClicked(!menuClicked)
    }
    return(
        <nav className="navBar">
            <span className="navBar_logo">Title Logo</span>
            {menuClicked ? <FiX size={25} className="navBar_menu" onClick={toggleMenuClick}/> : <FiMenu size={25} className="navBar_menu" onClick={toggleMenuClick}/> }
            <ul className={menuClicked ? "navBar_list navBar_list--active": "navBar_list" }>
            {navBarLinks.map( (item) =>{
                return (
                <li className="navBar_items" key={item.title}>
                    <a className="navBar_links" href={item.url}>{item.title}</a>
                    </li>
                    )
            } )}
            </ul>
        </nav>
    )
}

export default NavBar;