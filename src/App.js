import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Routes,
  Route,
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Home from './pages/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import AddEdit from './pages/dashboard/AddEdit';
import Description from './pages/Description';

// react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 2,
    },
  },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* our app goes here */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<Description />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blog/add' element={<AddEdit />} />
          <Route path='/blog/edit/:id' element={<AddEdit />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/register' element={<Register />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App