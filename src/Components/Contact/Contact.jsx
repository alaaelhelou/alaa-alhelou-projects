import React, { useState } from 'react'
import './contact.css'

export default function Contact() {

  const [labelMoving, setlabelMoving] = useState(false)
  const [ageMoving, setAgeMoving] = useState(false)
  const [emailMoving, setEmailMoving] = useState(false)
  const [passMoving, setPassMoving] = useState(false)

  return (
    <>

      <div className="contactPage pt-5">

        <div className="title text-center mt-5">
          <h1 className='text-uppercase fw-bold mt-5 pt-4 mb-3'>Conatct section</h1>
          <div className="star-icon d-flex align-items-center justify-content-center">
            <div className='line'></div>
            <i className='fas fa-star mx-3 my-3'></i>
            <div className='line'></div>
          </div>
        </div>

        <form className='w-50 mx-auto mb-2'>

          <div className='field position-relative w-100 overflow-hidden'><label className={labelMoving ? 'label show' : 'label'} htmlFor="userName">User Name:</label></div>


          <input onInput={(e) => setlabelMoving(e.target.value !== '')} placeholder='userName' className='w-100 py-3 ' type="text" id="userName" />

          <div className='field position-relative w-100 overflow-hidden'><label className={ageMoving ? 'label show' : 'label'} htmlFor="userName">User Age:</label></div>


          <input onInput={(e) => setAgeMoving(e.target.value !== '')} placeholder='userAge' className='w-100 py-3 ' type="text" id="userName" />

          <div className='field position-relative w-100 overflow-hidden'><label className={emailMoving ? 'label show' : 'label'} htmlFor="userName">User Email:</label></div>


          <input onInput={(e) => setEmailMoving(e.target.value !== '')} placeholder='userEmail' className='w-100 py-3 ' type="text" id="userName" />

          <div className='field position-relative w-100 overflow-hidden'><label className={passMoving ? 'label show' : 'label'} htmlFor="userName">User Password:</label></div>


          <input onInput={(e) => setPassMoving(e.target.value !== '')} placeholder='userPassword' className='w-100 py-3 ' type="text" id="userName" />


          <button type='button' className='text-white rounded-2 px-3 py-2 my-3'>send message</button>


        </form>
      </div>

    </>
  )
}
