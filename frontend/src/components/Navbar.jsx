import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import {data} from '../restApi.json';

const Navbar = () => {
    const [show,setShow]=useState(false)
  return (
    <nav>
        <div className="logo">Rest & Eat</div>
        <div className={show?"navLinks showmenu":"navLinks"}>
            <div className="links">
                {
                    data[0].navbarLinks.map((element)=>{
                        return (
                            <Link 
                            key={element.id}
                            to={element.link}
                            spy={"true"}
                            smooth={"true"}
                            duration={500}
                             >
                            {element.title}
                            </Link>
                        )
                    })
                }
            </div>
            <button className="menuBtn">Our Menu</button>
        </div>

        <div className="hamburger" onClick={()=>setShow(!show)}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  )
}

export default Navbar