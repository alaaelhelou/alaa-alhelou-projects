import './portfolio.css'
import  firstPhoto from '../../assets/images/poert1.png'
import  secondPhoto from '../../assets/images/port2.png'
import  thirdPhoto from '../../assets/images/port3.png'
import { useState } from 'react';
import Pictures from '../Pictures/Pictures';

export default function Portfolio() {

   const [imgs, setImgs] = useState([firstPhoto , secondPhoto , thirdPhoto]);
   

    return (
        <>

            <div className='portfolioPage min-vh-100 p-5 mt-5'>


                <div className="title text-center mt-4">
                    <h1 className='text-uppercase fw-bold my-3'>portfolio component</h1>
                    <div className="star-icon d-flex align-items-center justify-content-center">
                        <div className='line'></div>
                        <i className='fas fa-star mx-3 my-3'></i>
                        <div className='line'></div>
                    </div>
                </div>

                <div className="photos my-4">
          <div className="container">
                        <div className="row g-4">
                            
                            <Pictures imgs={imgs}/>         

                        </div>
                    </div>


                </div> 
           
                </div>
                


        </>
    )
}
