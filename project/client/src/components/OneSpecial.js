import {useEffect,useState,useContext} from 'react'
import {UserContext} from '../context/UserContextProvider'
import {Link,useParams,useNavigate} from 'react-router-dom'
// import PizzaImage from '../images/pizza1.jpg'
// import HomeImage from '../images/pizza.jpg'
import axios from 'axios'
import Nav from './Nav'

const OneSpecial = () => {
    const navigate = useNavigate()
    const {state} = useContext(UserContext)
    const [special,setSpecial] =useState({})
    // eslint-disable-next-line
    const [errors,setErrors] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/specials/${id}`,{withCredentials:true})
        .then((res)=>{
          console.log(res)
          setSpecial(res.data.special)
        })
        .catch((err)=>{
            console.error(err.response.status)
            setErrors(err)
            if(err.response.status === 500){
                navigate("/krustyCrabPizza/notfound")
            }
        })
      },[id,navigate,setErrors])
    
  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/specials/${id}`,{withCredentials:true})
    .then((res)=>{
      console.log(res)
      navigate('/krustyCrabPizza')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
              <Nav/>
      <h3>Pizza View <Link to="/krustyCrabPizza/allpizzas"><button className="btn hover">All Pizzas</button></Link> 
      <button onClick={()=>navigate(`/krustyCrabPizza/special//edit/${special._id}`)} > edit</button>
      </h3>
      <div className="bground2">
        <div className="card-view">
          <div className="close-cont">
                <button onClick={()=>{navigate('/krustyCrabPizza/allpizzas')}} className="close-btn hover hover-danger" >X</button>
          </div>
          <h4 className='h4'>{special.name? special.name:"...loading"} </h4>
          {/* eslint-disable-next-line */}
          <img className='onePizzaImg'  src={special.boxArt} alt="Pizza Image" />
          <h4 className='h4'>Crust: {special.crust}</h4>
          <h4 className='h4'>Sauce: {special.sauce}</h4>
          <h4 className='h4'>Cheese:{special.cheese}</h4>
          <h4 className='h4'>Meat Toppings: {special.meatToppings}</h4>
          <h4 className='h4'>Non-Meat Toppings: {special.nonMeatToppings}</h4>

          <h4 className='h4'>Instructions: {special.instructions}</h4>
          <div style={{display:'flex',justifyContent:'center'}}>

          {
            state.user ?
            <>
            <button onClick={handleDelete} className="btn hover hover-danger" >Delete</button>
            <Link to={`/krustyCrabPizza/${special._id}/edit`}><button  className="btn hover hover-success" >Edit</button></Link>
            </>
            : null
          }
                

          </div>
      </div>
      </div>
      
    </div>
  )
}

export default OneSpecial