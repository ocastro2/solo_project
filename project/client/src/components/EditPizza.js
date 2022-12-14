import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import {UserContext} from '../context/UserContextProvider'
import Nav from './Nav'

const EditPizza = () => {

  const {id} = useParams()
  const {state} = useContext(UserContext)
  const [name,setName]=useState("")
  const [size,setSize]=useState("")
  const [boxArt,setBoxArt]=useState("")
  const [crust,setCrust]=useState("")
  const [sauce,setSauce]=useState("")
  const [meatToppings,setMeatToppings]=useState("")
  const [nonMeatToppings,setNonMeatToppings]=useState("")
  const [cheese,setCheese]=useState("")
  const [errors,setErrors] = useState({})
  const navigate = useNavigate()
  



  useEffect(()=>{
    !state.user && navigate('/krustyCrabPizza/login')
  },[id, navigate,state.user])

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
    

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/pizzas/${id}`,{withCredentials:true})
      .then((res)=>{
        console.log(res.data.pizza)
        setName(res.data.pizza.name)
        setSize(res.data.pizza.size)
        setBoxArt(res.data.pizza.boxArt)
        setCrust(res.data.pizza.crust)
        setSauce(res.data.pizza.sauce)
        setMeatToppings(res.data.pizza.meatToppings)
        setNonMeatToppings(res.data.pizza.nonMeatToppings)
        setCheese(res.data.pizza.cheese)
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
        // if(meatToppings === "meatToppings" && meatToppings.checked ===true){
        //     if(meatToppings.meatToppings){
        //         let newList = [...meatToppings.meatToppings]
        //         newList.push({topping:e.target.value})
        //         setMeatToppings({...meatToppings,meatToppings:newList})
        //     }else{
        //         let myArray = [{meatToppings:e.target.value}]
        //         setMeatToppings({...meatToppings,meatToppings:myArray})
        //     }
        // }
        // else if(meatToppings === "meatToppings" && e.target.checked ===false){
        //     let newList = [...meatToppings.meatToppings]
        //         newList = newList.filter((item,index)=>(item.meatToppings !== e.target.value))
        //         setMeatToppings((meatToppings)=>({...meatToppings,meatToppings:newList}))
        //         console.log(meatToppings)        }

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
    const handleSubmit= (e)=>{
        e.preventDefault()

        const pizza = {
            name,
            size,
            boxArt,
            crust,
            sauce,
            nonMeatToppings,
            cheese,
            meatToppings:[{topping:state.meatToppings}],
        }

        axios.put(`http://localhost:8000/api/pizzas/${id}`,pizza,{withCredentials:true})
        .then((pizza)=>{
            console.log(pizza)
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
            {/* {errors.meatToppings ? <p>{errors.meatToppings.message}</p>:null} */}
            {/* <label htmlFor="">MeatToppings</label> */}
            {/* <select  className="form-control"  onChange={handleMeatToppings} name="" id="" value={meatToppings}>
                <option value=""></option> */}

                {/* {
                    meatToppingsArray.map((item,idx)=>(
                        <div key = {idx}>
                        // <option key = {idx} value={item}>{item}</option>
                        <input 
                        checked={(state.cheese?.filter((i,idx)=>(i.cheese=== item)))?.length === 1 ? true :false} 
                        
                        onChange={handleMeatToppings} name="cheese" id="" type="checkbox" value={item} />
                    </div>
                        ))
                    } */}
            {/* </select> */}
            <div className="col">
          {errors.meatToppings ? <p>{errors.meatToppings}</p>:null}

          <label htmlFor="meatToppings">Meat Toppings:</label>
          <div className="items">
              {

                    meatToppingsArray.map((item,index)=>(
                      <div key={index} >
                      <label htmlFor="">{item}
                      <input className='disp'
                      checked={(meatToppingsArray?.filter((i,idx)=>(i.meatToppings === item)))?.length === 1 ? true :false} 
                      onChange={handleMeatToppings} name="meatToppings" id="" type="checkbox" value={item} />
                      </label>
                      </div>
                  ))
              }
          </div>

      </div>
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
        <div className="row">
            <button className = "btn hover hover-success" type="submit">Add Pizza</button>
            <button onClick = {()=>navigate('/pizzas')} className = "btn hover hover-danger" >Cancel</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default EditPizza