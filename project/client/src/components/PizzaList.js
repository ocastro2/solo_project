import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {useNavigate
  // Navigate
} from 'react-router-dom'
import Nav from './Nav'
import {UserContext} from '../context/UserContextProvider'
// import io from 'socket.io-client'

const PizzaList = () => {

  const {state,dispatch} = useContext(UserContext);
  const [pizzas,setPizzas] = useState([])
  const [specials,setSpecials] = useState([])
  const navigate = useNavigate()
  // const [socket] = useState(()=>io(':8000',{
  //   withCredentials:true,
  //   extraHeaders:{
  //     "my-custom-header": "abcd"
  //   }
  // }))

  useEffect(()=>{

      console.log(state)
      axios.get('http://localhost:8000/api/pizzas',{withCredentials:true})
      .then((res)=>{
        console.log(res.data.pizzas)
        setPizzas(res.data.pizzas)
      })
      .catch((err)=>{
        console.log(err)
      })
      console.log(state)
  },[navigate, state.user, state
  ])

  useEffect(()=>{

    console.log(state)
    axios.get('http://localhost:8000/api/specials',{withCredentials:true})
    .then((res)=>{
      console.log(res.data.specials)
      setSpecials(res.data.specials)
    })
    .catch((err)=>{
      console.log(err)
    })
    console.log(state)
},[navigate, state.user, state
])

  const handleLogout = ()=>{
    console.log("logged out")
    dispatch({
      type:"LOGOUT_USER",
      payload:navigate
    })
    
  }


  return (
    <div>
      <Nav/>
        <h3>Pizza List
          <button className = "btn hover" onClick={()=>navigate('/krustyCrabPizza/add')}>Create Pizza</button>
          <button className = "btn hover" onClick={handleLogout}>Logout</button>
        </h3>
        <div className='row2'>
                  <div>
                  <p>specialty pizzas</p>
                <div className="contain">
          {
            specials.map((item,idx)=>(
                <div key={idx}
                onClick={()=>navigate(`/krustyCrabPizza/special/${item._id}`)} 
                className="cardsss" 
                  >
                    <div className="cardss">
    <h2 className="card-title">{item.name}</h2>
    <img src={item.boxArt} alt=""/>
    <ul className="card-desc">
    <li
                   className="pizza-items"><label className="label">name: </label>{item.name}
                  </li>
                  <li 
                   className="pizza-items"><label className="label">crust: </label>{item.crust}
                  </li>
       </ul>
  </div>
                  </div>
              ))
          }
          </div>
            </div>
          <hr/>
          <div>
                  <p>created pizzas</p>
          <div className="contain">
          {
            pizzas.map((item,idx)=>(
                <div key={idx}
                onClick={()=>navigate(`/krustyCrabPizza/${item._id}`)} 
                className="cardsss" 
                  >
                    <div className="cardss">
    <h2 className="card-title">{item.name}</h2>
    <img src="https://images.squarespace-cdn.com/content/v1/5982dd3fb8a79b0ae04bd1e0/1517173152501-EX4CFKBOC6GVV61YB1TL/Houmous+pizza+sm.jpg?format=1000w" alt=""/>
    <ul className="card-desc">
    <li
                   className="pizza-items"><label className="label">name: </label>{item.name}
                  </li>
                  <li 
                   className="pizza-items"><label className="label">crust: </label>{item.crust}
                  </li>
       </ul>
  </div>
                  </div>
              ))
          }
                </div>
                </div>
                </div>
     </div>
  )
}

export default PizzaList