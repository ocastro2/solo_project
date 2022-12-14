import React from 'react'
import HomeImage from '../images/pizza.jpg'


const HomeImg = () => {
  return (
    <div className='wrapper'>
        <img className='pizzaImg' src={HomeImage} alt="Home img"></img> 
    </div>
  )
}

export default HomeImg