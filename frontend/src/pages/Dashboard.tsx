import React from 'react'
import Navbar from '../components/NavBar';
import BookingsCard from '../components/BookingsCard';
import SearchBookings from '../components/SearchBookings';
import AllHotelReservationRecyclerView from '../components/AllHotelReservationRecyclerView';
import '../styles/Dashboard.css'


function MainDashboard() {
  return (
    <div className = "wrapper">
      <Navbar/>
      <div className="mainContainer">
        <h2 style={{fontSize: '5rem'}}> Good Morning </h2>
        <span style={{fontSize: '2rem',lineHeight: '0.25rem'}}>Here is what you have for the today</span>
        <div className="cardsContainer">
          <BookingsCard/>
        </div>
    </div>
     {/* <SearchBookings />
     <AllHotelReservationRecyclerView /> */}
     
    </div>
  )
}

export default MainDashboard;