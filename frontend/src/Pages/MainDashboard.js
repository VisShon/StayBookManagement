import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar.js';
import BookingsArea from '../Components/BookingsArea.js';
import SearchBookings from '../Components/SearchBookings.js';
import '../Styles/MainDashboard.css'
function MainDashboard() {
  return (
    <div className = "wrapper">
    <DashboardNavbar/>
    {/* <div></div> */}
     <BookingsArea /> 
     <SearchBookings />
     
    </div>
  )
}

export default MainDashboard;