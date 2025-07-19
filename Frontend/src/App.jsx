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
function App() {


  return (
    <>
      <Provider store={appStore}>

        <BrowserRouter basename="/">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/userlogin" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
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
      </Provider>
    </>
  )
}

export default App
