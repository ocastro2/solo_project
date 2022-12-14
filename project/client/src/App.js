import {useState
  // ,useEffect
  // ,useContext
} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import PizzaList from './components/PizzaList'
import CreatePizza from './components/CreatePizza'
import ViewOnePizza from './components/ViewOnePizza'
import EditPizza from './components/EditPizza'
import Register from './components/Register'
import About from './components/About';
import Login from './components/Login'
import Home from './views/Home';
import SpecialAdd from './components/SpecialAdd';
import SpecialEdit from './components/SpecialEdit';
import OneSpecial from './components/OneSpecial';
// import Nav from './components/Nav';
// import axios from 'axios'
import NotFound from './components/NotFound';
import {UserContextProvider} from './context/UserContextProvider'
// import {UserContext} from './context/UserContextProvider'


function App() {
  // const loggedIn1 = window.localStorage.getItem("isLoggedIn");
  const [loggedIn,setLoggedIn] = useState(false)
  // const {state,dispatch} = useContext(UserContext)
  // const {state,dispatch} = props

  // console.log(state)
  // useEffect(()=>{
  //     axios.post('http://localhost:8000/api/v1/isLoggedIn',{},{withCredentials:true})
  //   .then((user)=>{
  //     console.log(user.data)
  //     dispatch({
  //         type:"SET_USER",
  //       payload:user.data
  //     })
  //     // setUser(user.data) this is what we did before
  //     setLoggedIn(true)
  //   })
  //   .catch((err)=>{
  //       console.log(err.response.data)
  //     // setUser(null)
  //     dispatch({
  //         type:"NULL_USER",
  //     })
  //   })

  // },[dispatch])
  
  return (
    <div className="App">
    <UserContextProvider>
      <BrowserRouter>
          {/* <Nav> */}
      <Routes>
        <Route element = {<Register setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} path="/krustyCrabPizza/register" />
        <Route element = {<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} path="/krustyCrabPizza/login" />
        <Route element = {<Navigate to="/krustyCrabPizza" />} path="/" />
        <Route element = {<About />} path="/krustyCrabPizza/aboutus" />
        <Route element = {<NotFound />} path="/krustyCrabPizza/notfound" />
        <Route element = {<SpecialAdd />} path="/krustyCrabPizza/special" />
        <Route element = {<SpecialEdit />} path="/krustyCrabPizza/special//edit/:id" />
        <Route element = {<Home />} path="/krustyCrabPizza" />
        <Route element = {<CreatePizza />} path="/krustyCrabPizza/add" />
        <Route element = {<PizzaList />} path="/krustyCrabPizza/allpizzas" />
        <Route element = {<ViewOnePizza />} path="/krustyCrabPizza/:id" />
        <Route element = {<OneSpecial />} path="/krustyCrabPizza/special/:id" />
        <Route element = {<EditPizza/>}  path="/krustyCrabPizza/:id/edit" />
        <Route element = {<Navigate to="/krustyCrabPizza/notfound" />} path="*" />
      </Routes>
      {/* </Nav> */}
      </BrowserRouter>
    </UserContextProvider> 
        </div> 
  );
}

export default App;
