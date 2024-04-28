import React, { useRef } from 'react'
import { Container } from 'reactstrap'
import './Header.css'



function Header() {

    const navLinks = [
        {
            display: 'Home',
            url: "/"
        },
        {
            display: 'About',
            url: "/AboutUs",

        },
          {

            display: 'Courses',
            url: "/Courses"
        },
        {

            display: 'Page',
            url: "/ChooseUs"
        },

        

    ]
    

     const menuRef = useRef()

     const menuToggle = () => menuRef.current.classList.toggle('active__menu')


     return (

        <header className='header'>
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className='logo '>
                        <h2 className='d-flex align-items-center gap-3 '><i class="ri-bowl-fill"></i>Knowledge Fiesta</h2>
                    </div>

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav-menu" ref={menuRef} >
                            <ul className='nav-list'>
                                {
                                    navLinks.map((item, index) => (
                                        <li key={index} className="nav-items">
                                            <a href={item.url}> {item.display}</a>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>

                    <div className="nav-right">
                        <p className='mb-0 d-flex align-items-center gap-2'><i class="ri-phone-fill"></i> 03214517639</p>

                    </div>

                    <div className="mobile-menu " onClick={menuToggle}>
                    <span><i class="ri-menu-line"></i>
                    </span>
                    </div>

                </div>
            </Container>
        </header>
    )
}

export default Header
