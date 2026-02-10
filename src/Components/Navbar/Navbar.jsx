import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [Paddingg, setPaddingg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setPaddingg(window.scrollY > 20);
        }), []
    })


    return (
        <>

        {Paddingg ?   <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-5 position-fixed w-100 top-0 z-1">

                <div className="container-fluid">
                    <a className="navbar-brand text-uppercase text-white fw-bolder fs-3" href="#">Start framework</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-white fw-bolder" aria-current="page" to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-white fw-bolder" to="/portfolio">Protfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-white fw-bolder" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav> :   <nav className="navbar navbar-expand-lg bg-body-tertiary py-4 px-5 position-fixed w-100 top-0 z-1">

                <div className="container-fluid">
                    <a className="navbar-brand text-uppercase text-white fw-bolder fs-3" href="#">Start framework</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-white fw-bolder" aria-current="page" to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-white fw-bolder" to="/portfolio">Protfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-white fw-bolder" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav>}

          

        </>
    )
}

