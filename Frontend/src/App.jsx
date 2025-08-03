import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Layout from './Components/Layout'
import Login from './Components/UserLogin'
import appStore from './utils/store/appStore'
import { Provider } from "react-redux"
import Dashboard from './Components/Dashboard'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { addUser } from './utils/store/userSlice';
import TabForm from './Components/TabForm';
import UpdateExistingResume from './Components/UpdateExistingResume';
// import ResumePDF from './Components/ResumePDF';

const BASE_URL = import.meta.env.VITE_BASE_URL

const AppWrapper = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/user`, { withCredentials: true })
        // console.log("resfrom get", res)
        dispatch(addUser(res.data.user))
      } catch (error) {
        console.log("Not logged in, or session expired");

      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [dispatch])

  if (loading) return <h1 className="text-center text4xl font-bold text-blue-600">Loading...</h1>
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/userlogin" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/resume" element={<TabForm />} />
            <Route path="update-resume" element={<UpdateExistingResume />} />
            {/* <Route path="resume-pdf" element={<ResumePDF />} /> */}
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" // optional: "light" | "colored"
        />
      </BrowserRouter>

    </>

  )
}
function App() {


  return (
    <>
      <Provider store={appStore}>

        <AppWrapper />
      </Provider>
    </>
  )
}

export default App
