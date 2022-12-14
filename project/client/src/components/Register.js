import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios'



const Register = ({user}) => {
    const navigate = useNavigate()
    const [state,setState] = useState({})
    // eslint-disable-next-line
    const [errors,setErrors] = useState({})


    useEffect(()=>{
        user && navigate('/krustyCrabPizza')
    },[user, navigate])

    const submitHandler = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:8000/api/register',state,{withCredentials:true})
        .then((res)=>{
            navigate('/krustyCrabPizza/login')
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err)
        })
    }

    const changeHandler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }


  return (
    <div className="" >
        <Nav/>
        <h3>Register<button className = "btn hover hover-success" onClick={()=>navigate('/krustyCrabPizza/login')}>Login</button></h3>
        <div className='form_card'>
            
        <form className="reg-form" onSubmit={submitHandler}>
            <div className="">
                <label htmlFor="">First Name:</label>
                <input  className="form-control" onChange={changeHandler} name="firstName" type="text" />
            </div>
            <div className="">
                <label htmlFor="">Last Name:</label>
                <input className="form-control" onChange={changeHandler} name="lastName" type="text" />
            </div>
            <div className="">
                <label htmlFor="">Email:</label>
                <input className="form-control" onChange={changeHandler} name="email" type="email" />
            </div>
            <div className="">
                <label htmlFor="">Password:</label>
                <input  className="form-control" onChange={changeHandler} name="password" type="password" />
            </div>
            <div className="">
                <label htmlFor="">Confirm Password:</label>
                <input className="form-control" onChange={changeHandler} name="confirmPassword" type="password" />
            </div>
            <div className="row">
                <button className="reg-btn hover hover-success" type="submit">Register</button>
            </div>
        </form>
        </div>

    </div>
  )
}

export default Register