import React from 'react'
import '../Styles/SearchBookings.css';

function SearchBookings() {
  return (

    <div className ="wrapperSearchBookings">
    <div class="search">
      <input type="text" class="searchText" placeholder="Search for Reservations using the names" />
      <button type="submit" class="searchBtn">
        <i class="fa fa-search"></i>
     </button>
   </div>
   <div className ="downloadReport">Download Report</div>
   </div>
  )
}

export default SearchBookings