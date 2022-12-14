import {useState,useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Nav from './Nav'
import {UserContext} from '../context/UserContextProvider'


const SpecialAdd = () => {
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

//   useEffect(()=>{
//     console.log("on Pizza Add")
//     !state.user && navigate('/krustyCrabPizza/login')
//     console.log(state.user)
//   },[navigate,state.user])

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
        'jalapeno peppers',
        'onions',
        'banana peppers',
        'broccoli',
        'eggplant',
        'diced tomatoes',
        'black olives',
        'mushrooms',
        'pineapple',
        'spinach',
        'roasted red peppers',
        'feta cheese',
        'green peppers',
        'arugula', 
        'kale',
        'zucchini']

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
        'robust inspired tomato sauce',
        'marinara sauce',
        'honey BBQ sauce',
        'garlic parmesan sauce',
        'alfredo sauce',
        'ranch',
        'buffalo',
        'Pesto',
        'Hummus',
        'White Garlic Sauce']
    const sizeArray = [      
        'small',
        'medium',
        'large',
        'x-large']
        

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

        const special = {
            name,
            size,
            boxArt,
            crust,
            sauce,
            meatToppings,
            nonMeatToppings,
            cheese,
            instruction
            
        }

        axios.post("http://localhost:8000/api/specials",special,{withCredentials:true})
        .then((special)=>{
            console.log(special)
            console.log(boxArt)
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
        <h3>Add Pizza <button className = "btn hover" onClick={()=>navigate('/krustyCrabPizza/allpizzas')}>All Pizzas</button></h3>
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
            <select className="form-control"  onChange = {handleSize} name="" id="" value={size}>
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
            {/* <input className="form-control" onChange={handleCrust} type="text" value={crust} /> */}
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
            {/* <input className="form-control"  onChange={handleSauce} type="text" value={sauce}/> */}
            <select  className="form-control"  onChange={handleSauce} name="" id="">
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
            {/* <input className="form-control"  onChange={handleCheese} type="text" value={cheese} /> */}
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
  )
}

export default SpecialAdd