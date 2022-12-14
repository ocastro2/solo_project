import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import {UserContext} from '../context/UserContextProvider'
import Nav from './Nav'

const SpecialEdit = () => {
 
const {id} = useParams()
// eslint-disable-next-line
const {state} = useContext(UserContext)
const [name,setName]=useState("")
const [size,setSize]=useState("")
const [boxArt,setBoxArt]=useState("")
const [crust,setCrust]=useState("")
const [sauce,setSauce]=useState("")
const [meatToppings,setMeatToppings]=useState("")
const [nonMeatToppings,setNonMeatToppings]=useState("")
const [cheese,setCheese]=useState("")
const [instruction, setInstruction] = useState("")
const [errors,setErrors] = useState({})
const navigate = useNavigate()




// useEffect(()=>{
//   !state.user && navigate('/krustyCrabPizza/login')
// },[])

const crustArray = [
  'brooklyn style',
  'hand tossed',
  'crunchy thin crust',
  'Chicago Deep Dish',
  'cheese stuffed crust',
  'Cracker Crust',
  'cinnamon crust',
  'Flatbread Crust',
  'Sicilian-Style Crust',
  'vegan crust',
  'cauliflower'
]

const meatToppingsArray = [      
'ham',
'beef',
'salami',
'pepperoni',
'sausage',
'chicken',
'bacon',
'philly steak',
'Prosciutto',
'crab meat',
'shrimp',
'meatballs']

const nonMeatToppingsArray = [      
  'ham',
  'beef',
  'salami',
  'pepperoni',
  'sausage',
  'chicken',
  'bacon',
  'philly steak',
  'Prosciutto',
  'crab meat',
  'shrimp',
  'meatballs']

const cheeseArray = [      
  'shredded provolone cheese',
  'cheddar',
  'pepper jack',
  'mozzarella cheese',
  'parmesan cheese',
  'gouda',
  'goat cheese',
  'gruyere',
  'ricotta']
const sauceArray = [      
  'shredded provolone cheese',
  'cheddar',
  'pepper jack',
  'mozzarella cheese',
  'parmesan cheese',
  'gouda',
  'goat cheese',
  'gruyere',
  'ricotta']
const sizeArray = [      
  'small',
  'medium',
  'large',
  'x-large']
  

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/specials/${id}`,{withCredentials:true})
    .then((res)=>{
      console.log(res.data.special)
      setName(res.data.special.name)
      setSize(res.data.special.size)
      setBoxArt(res.data.special.boxArt)
      setCrust(res.data.special.crust)
      setSauce(res.data.special.sauce)
      setMeatToppings(res.data.special.meatToppings)
      setNonMeatToppings(res.data.special.nonMeatToppings)
      setCheese(res.data.special.cheese)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[id])

  const handleName = (e)=>{
      setErrors("")
      setName(e.target.value)
      
      
  }
  const handleSize = (e)=>{

      setErrors("")
      setSize(e.target.value)
  }
  const handleBoxArt = (e)=>{

      setErrors("")
      setBoxArt (e.target.value)
  }
  const handleCrust = (e)=>{

      setErrors("")
      setCrust(e.target.value)
  }
  const handleMeatToppings= (e)=>{

      setErrors("")
      setMeatToppings(e.target.value)
  }
  const handleSauce = (e)=>{
      
      setErrors("")
      setSauce(e.target.value)
  }
  const handleNonMeatToppings = (e)=>{
      
      setErrors("")
      setNonMeatToppings(e.target.value)
  }
  const handleCheese = (e)=>{
      
      setErrors("")
      setCheese(e.target.value)
  }
  const handleInstruction = (e)=>{
    setErrors("")
    setInstruction(e.target.value)
}
  const handleSubmit= (e)=>{
      e.preventDefault()

      const special= {
          name,
          size,
          boxArt,
          crust,
          sauce,
          meatToppings,
          nonMeatToppings,
          cheese
      }

      axios.put(`http://localhost:8000/api/specials/${id}`,special,{withCredentials:true})
      .then((special)=>{
          console.log(special)
          navigate("/krustyCrabPizza/allpizzas")
      })
      .catch((err)=>{
          console.log(err.response.data.error.errors)
          setErrors(err.response.data.error.errors)
      })
  }

return (
  <div>
      <Nav/>
      <h3>Edit Pizza <button className = "btn hover" onClick={()=>navigate('/krustyCrabPizza/allpizzas')}>All Pizzas</button></h3>
      <div className='form_card'>
      <form onSubmit={handleSubmit}>
      <div>
          {errors.name ? <p>{errors.name.message}</p>:null}
          <label htmlFor="">name</label>
          <input className="form-control" onChange={handleName} type="text" value={name}  />
      </div>
      <div>
          {errors.size ? <p>{errors.size.message}</p>:null}
          <label htmlFor="">Size</label>
          <select className="form-control"  onChange = {handleSize} name="" id="" value={size}  >
              <option value=""></option>
              {
                  sizeArray.map((item,idx)=>(
                      <option key = {idx} value={item}>{item}</option>
                  ))
              }
          </select>
      </div>
      <div>
          {errors.boxArt ? <p>{errors.boxArt.message}</p>:null}
          <label htmlFor="">Box Art</label>
          <input className="form-control"  onChange={handleBoxArt} type="text" value={boxArt} />
      </div>
      <div>
          {errors.crust ? <p>{errors.crust.message}</p>:null}
          <label htmlFor="">Crust</label>
          <select className="form-control"  onChange = {handleCrust} name="" id="" value={crust}>
              <option value=""></option>
              {
                  crustArray.map((item,idx)=>(
                      <option key = {idx} value={item}>{item}</option>
                  ))
              }
          </select>
      </div>
      <div>
          {errors.meatToppings ? <p>{errors.meatToppings.message}</p>:null}
          <label htmlFor="">MeatToppings</label>
          <select  className="form-control"  onChange={handleMeatToppings} name="" id="" value={meatToppings}>
              <option value=""></option>
              {
                  meatToppingsArray.map((item,idx)=>(
                      <option key = {idx} value={item}>{item}</option>
                  ))
              }
          </select>
      </div>
      <div>
          {errors.sauce ? <p>{errors.sauce.message}</p>:null}
          <label htmlFor="">Sauce</label>
          <select  className="form-control"  onChange={handleSauce} name="" id="" value={sauce}>
              <option value=""></option>
              {
                  sauceArray.map((item,idx)=>(
                      <option key = {idx} value={item}>{item}</option>
                  ))
              }
          </select>
      </div>
      <div>
          {errors.nonMeatToppings ? <p>{errors.nonMeatToppings.message}</p>:null}
          <label htmlFor=""> NonMeatToppings</label>
          <select  className="form-control"  onChange={handleNonMeatToppings} name="" id="" value={nonMeatToppings}>
              <option value=""></option>
              {
                  nonMeatToppingsArray.map((item,idx)=>(
                      <option key = {idx} value={item}>{item}</option>
                  ))
              }
          </select>
      </div>
      <div>
          {errors.cheese ? <p>{errors.cheese.message}</p>:null}
          <label htmlFor="">Cheese</label>

          <select  className="form-control"  onChange={handleCheese} name="" id="" value={cheese}>
              <option value=""></option>
              {
                  cheeseArray.map((item,idx)=>(
                      <option key = {idx} value={item}>{item}</option>
                  ))
              }
          </select>
      </div>
      <div>
            {errors.instruction ? <p>{errors.instruction.message}</p>:null}
            <label htmlFor="">Instruction:</label>
            <input className="form-control" onChange={handleInstruction} type="texterea" value={instruction}  />
        </div>
      <div className="row">
          <button className = "btn hover hover-success" type="submit">Add Pizza</button>
          <button onClick = {()=>navigate('/pizzas')} className = "btn hover hover-danger" >Cancel</button>
      </div>
      </form>
      </div>
  </div>
  
)}
            
export default SpecialEdit