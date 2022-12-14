import {useEffect,useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserContext} from '../context/UserContextProvider'
import Nav from './Nav'



const Login = ({setLoggedIn}) => {
    const {state,dispatch} = useContext(UserContext);
    const [input,setInput] = useState({})
    const navigate = useNavigate()
    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")
    // eslint-disable-next-line
    const [errors,setErrors] = useState({})

    useEffect(()=>{
        console.log("current state")
        console.log(state)
        state.user && navigate("/krustyCrabPizza")
        localStorage.setItem("state" , JSON.stringify(state))
    },[
        // state.user
        navigate
        ,state])

    // const handleEmail = (e)=>{
    //     setErrors("")
    //     setEmail(...input,email)
    // }
    // const handlePassword = (e)=>{
    //     setErrors("")
    //     setPassword(...input,e.target.value)
    // }
    const submitHandler = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:8000/api/login',input,{withCredentials:true})
        .then((res)=>{
            // console.log(res.data)
            dispatch({
                type:"SET_USER",
                payload:res.data.user
            })
            
            setLoggedIn(true)
            console.log("updated current state")
            console.log(state)
            localStorage.setItem("isLoggedIn","true")
            localStorage.setItem("state" , JSON.stringify(state))
            navigate("/krustyCrabPizza/add")
        })
        .catch((err)=>{
            console.log(err.response.data.error)
            setErrors(err.response.data.error)
        })
    }

        const changeHandler=(e)=>{
            setInput({...input,[e.target.name]:e.target.value})
        }

  return (
    <div className="" >
        <Nav/>
        <h3>Login<button className = "btn hover hover-success" onClick={()=>navigate('/krustyCrabPizza/register')}>Register</button></h3>
        <div className='form_card'>
        <form className="" onSubmit={submitHandler}>
            
            <div className="">
            {/* {errors.e.email?  <p>{errors.e.email.msg}</p>:null} */}
                <label htmlFor="">Email:</label>
                <input className="form-control" onChange={changeHandler} name="email" type="email"  />
            </div>
            <div className="">
                <label htmlFor="">Password:</label>
                <input className="form-control" onChange={changeHandler} name="password" type="password" />
            </div>
            
            <div className="row">
                <button className="reg-btn hover hover-success" type="submit">Login</button>
            </div>
        </form>
        </div>

    </div>)
}
  
export default Login