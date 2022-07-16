import React,{useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

import './Navbar.css';

function Navbar() {
    const [sidebar, setSideBar ] = useState(false);
    const showSideBar = () => {
        setSideBar(!sidebar)
    }
    useEffect(() => {
        localStorage.getItem('username');
    })
    var userName = localStorage.getItem('username');
  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}> 
        <div className="navbar">
            <Link to="#" className='menu-bars'>
                 <FaIcons.FaBars onClick={showSideBar}/>
                 <h5 className='text2'>{userName}</h5>              
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}>
            </Link>
        </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
