import React from 'react'
import {useNavigate
  // Navigate
} from 'react-router-dom'
import img1 from '../images/alone.jpg'


const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
        {/* <img className='errorImg' src={img1} alt="404 img"></img> 
        <button className='btn2'>go back</button> */}
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
    <img src={img1} alt="" className="absolute h-full w-full object-cover"/>
    <div className="inset-0 bg-black opacity-25 absolute">
    </div>
    <div className="mx-auto  px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
<button className="but" onClick={()=>navigate('/krustyCrabPizza')}>Back to homepage</button>
  You are all alone here
          </h1>
            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                404
            </p>
        </div>
    </div>
</div>


    </div>
  )
}

export default NotFound