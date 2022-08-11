import React from 'react'
import DashboardNavbar from '../Components/DashboardNavbar.js';
import BookingsArea from '../Components/BookingsArea.js';
import '../Styles/MainDashboard.css'
function MainDashboard() {
  return (
    <div className = "wrapper">
    <DashboardNavbar/>
    <div></div>
     <BookingsArea /> 
     <div class="searchBtn">
      <input type="text" class="searchTermBtn" placeholder="Type and Press Enter to add tags and search" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
    </div>
  )
}

export default MainDashboard;