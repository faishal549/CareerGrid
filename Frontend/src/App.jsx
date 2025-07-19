
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Layout from './Components/Layout'
import Login from './Components/UserLogin'
function App() {


  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/userlogin" element={<Login />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
