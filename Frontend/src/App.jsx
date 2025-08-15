
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import appStore from './utils/store/appStore';
import { addUser } from './utils/store/userSlice';
import axiosInstance from './utils/axiosInstance';

import Home from './Components/Home';
import Layout from './Components/Layout';
import Login from './Components/UserLogin';
import Dashboard from './Components/Dashboard';
import TabForm from './Components/TabForm';
import UpdateExistingResume from './Components/UpdateExistingResume';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// ---------------- ProtectedRoute Component ----------------
const ProtectedRoute = ({ children }) => {
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.appLoading);

  if (loading) {
    return <h1 className="text-center text-2xl font-bold text-blue-600">Checking authentication...</h1>;
  }

  if (!user) {
    return <Navigate to="/userlogin" replace />;
  }

  return children;
};

// ---------------- Main App Wrapper ----------------
const AppWrapper = () => {
  const dispatch = useDispatch();
  const [appLoading, setAppLoading] = useState(true);

  // Store app loading status in Redux for ProtectedRoute
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get(`${BASE_URL}/api/user`);
        dispatch(addUser(res.data.user));
      } catch (error) {
        console.log("Not logged in, or session expired");
      } finally {
        setAppLoading(false);
      }
    };
    checkAuth();
  }, [dispatch]);

  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/resume"
            element={
              <ProtectedRoute>
                <TabForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-resume"
            element={
              <ProtectedRoute>
                <UpdateExistingResume />
              </ProtectedRoute>
            }
          />
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
        theme="dark"
      />
    </BrowserRouter>
  );
};

// ---------------- App Entry ----------------
function App() {
  return (
    <Provider store={appStore}>
      <AppWrapper />
    </Provider>
  );
}

export default App;
