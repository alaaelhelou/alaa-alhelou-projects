import React from 'react'
import './about.css'

export default function About() {
  return (
    <>

      <div className="aboutPage text-center min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className='text-uppercase text-white fw-bold my-3'>about component</h1>
        <div className="star-icon d-flex align-items-center justify-content-center">
          <div className='line'></div>
          <i className='fas fa-star text-white mx-3 my-3'></i>
          <div className='line'></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="inner text-white">
                
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </div>

            </div>

            <div className="col-md-6">
              <div className="inner text-white">
                
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
