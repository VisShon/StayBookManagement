import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar.js';
import BookingsArea from '../Components/BookingsArea.js';
function MainDashboard() {
  return (
    <div className = "wrapper">
    <DashboardNavbar/>
    <div></div>
     <BookingsArea /> 
    </div>
  )
}

export default MainDashboard;