import React, { useState } from 'react'
import './pictures.css'

export default function Pictures({ imgs }) {




    const [active, setActive] = useState(null)
    

    

    return (

        <>
        {imgs.map((img , index)=><div  key={index} className="col-md-4">
                <div onClick={() => setActive(index)} className="photo position-relative">
                    <img className='w-100 rounded-4' src={img} alt="poert1" />
                    <div className="layer position-absolute top-0 start-0 w-100 h-100 rounded-4 d-flex align-items-center justify-content-center"><i className='fas fa-plus text-white fa-6x'></i></div>
                </div>
            </div>)}
            {imgs.map((img , index)=><div key={index} className="col-md-4">
                <div onClick={() => setActive(index)} className="photo position-relative">
                    <img className='w-100 rounded-4' src={img} alt="poert1" />
                    <div className="layer position-absolute top-0 start-0 w-100 h-100 rounded-4 d-flex align-items-center justify-content-center"><i className='fas fa-plus text-white fa-6x'></i></div>
                </div>
            </div>)}
            {active !==null && (<div onClick={()=>setActive(null)} className="light-container h-100 w-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center">
                <div onClick={(e)=>e.stopPropagation()} className="box w-50"><img className='w-100' src={imgs[active]} alt="" /></div>
            </div>)}
 
         

        </>
    )
}
