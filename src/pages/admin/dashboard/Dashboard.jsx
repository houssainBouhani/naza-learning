import React from 'react'

//dashboard header
import Header from './components/header/Header'
import Users from './Users'

const Dashboard = () => {
  return (
      <div className='container-fluid p-4'>
           <Header/>
           <Users/>
      </div>
 
  )
}

export default Dashboard