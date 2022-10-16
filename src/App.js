import React, { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
import Signout from './pages/auth/Signout';
import Fallback from './components/fallback/Fallback';
import { Route, Routes } from 'react-router-dom';

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
      <Suspense fallback={<Fallback />}>
        <QueryClientProvider client={queryClient}>
          {/* <ScrollToTop /> */}
          {/* our app goes here */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/blog/:id" element={<Description />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path='/dashboard/blog/edit/:id' element={<AddEdit />} />
            <Route path='/dashboard/blog/add' element={<AddEdit />} />
            <Route path='/user/login' element={<Login />} />
            <Route path='/user/sign-out' element={<Signout />} />
            <Route path='/user/register' element={<Register />} />
          </Routes>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </>
  )
}

export default App