import React from 'react'
import logo from '../Photos/staybookLogo.png';
import dashboardImage from '../Photos/layout.png';
import calenderImage from '../Photos/calendarNew.png';
import inventoryImage from '../Photos/stock.png';
import ButtonImage from '../Photos/searchButton.png';
import '../Styles/DashboardNavbar.css';

function DashboardNavbar() {
  return (
    <div className = "wrapperDiv">
    <div className = "leftDiv">
    <img className="stayBookImage" src = {logo} alt ="No image Found"></img>
    <img  className="imageName" src = {dashboardImage}  alt  ="No image found!!" >
    </img>
    <div className = "dashboardHiddenText">Dashboard</div>
    <img className="imageName"  src = {calenderImage} alt  ="No image found!!"></img>
    <div className = "calendarHiddenText">Calendar</div>
    <img  className="imageName" src = {inventoryImage} alt  ="No image found!!"></img>
    <div className = "inventoryHiddenText">Inventory</div>
    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Search for Reservations" />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>

<img src={ButtonImage } className = "buttonImage"></img>
  
    
    </div>
    <div className = "rightDiv"></div>
<div className = "hotelName">Hotel Name</div>
    </div>
  )
}

export default DashboardNavbar;