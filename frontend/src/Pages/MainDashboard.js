import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar.js';
import BookingsArea from '../Components/BookingsArea.js';
import SearchBookings from '../Components/SearchBookings.js';
import AllHotelReservationRecyclerView from '../Components/AllHotelReservationRecyclerView.js';
import '../Styles/MainDashboard.css'
function MainDashboard() {
  return (
    <div className = "wrapper">
    <DashboardNavbar/>
    {/* <div></div> */}
     <BookingsArea /> 
     <SearchBookings />
     <AllHotelReservationRecyclerView />
     
    </div>
  )
}

export default MainDashboard;