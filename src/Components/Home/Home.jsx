import React from 'react'
import Logo from '../../assets/images/avataaars.svg'
import './home.css'

export default function Home() {
  return (
    <>
    
      <div className='homePage text-center bg-danger min-vh-100 d-flex flex-column align-items-center justify-content-center'>
        <div className="container ">


        <img className='avatar'src={Logo} alt="Avatar" />
        <h1 className='text-uppercase text-white fw-bold my-3'>Start Framework</h1>

        <div className="star-icon d-flex align-items-center justify-content-center">
          <div className='line'></div>
          <i className='fas fa-star text-white mx-3 my-3'></i>
          <div className='line'></div>
        </div>

        <div className="parts">
          <h2 className='h6 fw-light text-white'>Graphic Artist - Web Designer - Illustrator</h2>
        </div>

      </div>
        </div>
    </>
  )
}
