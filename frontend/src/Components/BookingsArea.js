import React from 'react'
import '../Styles/BookingsArea.css';
import BookingsCard from '../Cards/BookingsCard';
function BookingsArea() {
  return (
    <div class="main-container">
   
    <div class="cards">
     
     <BookingsCard title = "New Bookings" number= "0" count = "1"/>
     <BookingsCard title = "In-house" number= "0" count = "2"/>
     <BookingsCard title = "Arrivals" number= "0" count ="3"/>
     <BookingsCard title = "Departures" number= "0" count = "4"/>
     <BookingsCard title = "Cancellations" number= "0" count = "5"/>
     <BookingsCard title = "On hold" number= "0" count = "1"/>
     <BookingsCard title = "No shows" number= "0" count = "2"/>
     <BookingsCard title = "Magic Link" number= "0" count = "3"/>
    </div>
  </div>
  )
}

export default BookingsArea;