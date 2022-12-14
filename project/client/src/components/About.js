import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Nav/>
        <h3>About Us<Link to="/krustyCrabPizza/allpizzas"><button className="btn hover">All Pizzas</button></Link></h3>
    <div className='bground'>
        <div className='card-view2'>
            <h1 className='h1'>create all types of wacky pizzas</h1>
            <div>
            <h2 className='h4'><label>Phone Number:</label> 1 800 krustyK</h2>
            <h2 className='h4'><label>Location:</label>Location: Bikini Bottom</h2>
            <h2 className='h4'> <label>Little About Us:</label> The Krusty Krab is a fictional fast food restaurant in the American animated 
                television series SpongeBob SquarePants. It is famous for its signature burger, 
                the Krabby Patty, the formula to which is a closely guarded trade secret.</h2>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default About