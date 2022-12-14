import React from 'react'
import {useNavigate
    // Navigate
    // Link
  } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="nav">
            <div className="nav-div">
            <h3 className="nav-h3">Krusty-Krab pizza</h3>
            </div>
            <div className="nav-div">
                <button className='btn2' onClick={()=>navigate('/krustyCrabPizza')}>home</button>
                <button className='btn2' onClick={()=>navigate('/krustyCrabPizza/allpizzas')}>all pizzas</button>
                <button className='btn2' onClick={()=>navigate('/krustyCrabPizza/add')}>create a pizza</button>
                <button className='btn2' onClick={()=>navigate('/krustyCrabPizza/aboutus')}>about us</button>
                <a href='http://localhost:5173' className='btn2'>find us</a>
            </div>
        </div>

    </div>
  )
}

export default Nav