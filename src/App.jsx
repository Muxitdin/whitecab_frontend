import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import './App.css'
import PublicOffer from './pages/PublicOffer'
import Prelogin from './pages/Prelogin'
import { getFromLocalStorage } from './config/localstorage'
import { getAuthFunction } from './redux/slice/authSlice'
import { useDispatch } from 'react-redux'
import Contacts from './pages/Contacts'

function App() {
    const dispatch = useDispatch();
    const [isAtHome, setIsAtHome] = useState(true)
    

    useEffect(() => {
        const getUser = async () => {
            try {
                dispatch(getAuthFunction())
                console.log("success")
            } catch (error) {
                console.log(error)
            }
        }

        if (getFromLocalStorage("token")) {
            getUser();
        }
    })

    return (
        <Routes>
            <Route path="/" element={<Home isAtHome={isAtHome} />} />
            <Route path="/contacts" element={<Contacts isAtHome={isAtHome}/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/prelogin" element={<Prelogin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/public-offer" element={<PublicOffer />} />
        </Routes>
    )
}

export default App
