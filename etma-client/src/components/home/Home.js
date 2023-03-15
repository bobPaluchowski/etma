import React from 'react'
import Dashboard from '../dashboard/Dashboard';

const Home = ({employees}) => {
  return (
      <Dashboard employees={employees} />
  )
}

export default Home