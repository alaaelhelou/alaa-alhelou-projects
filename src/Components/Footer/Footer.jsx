import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer className='footerPart'>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">

              <div className="f-part d-flex flex-column align-items-center justify-content-center text-center">
                <h3 className='text-uppercase text-white fw-medium'>Location</h3 >
                <h6 className='text-white fw-light'>2215 John Daniel Drive <br /> Clark, MO 65243 </h6>

              </div>
            </div>
            <div className="col-md-4">
              <div className="s-part d-flex flex-column align-items-center justify-content-center">
                <h3 className='text-uppercase text-white fw-medium'>
                  AROUND THE WEB
                </h3>
                <div className="icons d-flex align-items-center justify-content-center gap-2">
                  <div className="icon border border-2 border-white rounded-circle d-flex align-items-center justify-content-center">
                    <i className='fa-brands fa-facebook text-white'></i>
                  </div>
                  <div className="icon border border-2 border-white rounded-circle d-flex align-items-center justify-content-center">
                    <i className='fa-brands fa-twitter text-white'></i>
                  </div> <div className="icon border border-2 border-white rounded-circle d-flex align-items-center justify-content-center">
                    <i className='fa-brands fa-linkedin text-white'></i>
                  </div> <div className="icon border border-2 border-white rounded-circle d-flex align-items-center justify-content-center">
                    <i className='fa-solid fa-globe text-white'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="th-part d-flex flex-column align-items-center justify-content-center text-center">
                <h3 className='text-uppercase text-white fw-medium'>
                  ABOUT FREELANCER
                </h3>
                <p className='text-white fw-light'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <div className="last-line p-4 text-white text-center">
        Copyright © Your Website 2021
      </div>
    </>
  )
}
