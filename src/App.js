import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* our app goes here */}
        <Home />
      </QueryClientProvider>
    </>
  )
}

export default App