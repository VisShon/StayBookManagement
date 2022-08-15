import React from 'react'
import '../Styles/HotelReservationCard.css'
function HotelReservationCard(props) {
  return (
    <div className="Card">
    <div className="card__body">
      <div className = "NameWrapper">
      <h2 className="title">{props.name}</h2>
      <p className="description">{props.phoneNumber}</p>
      <h5 className = "bookingID">{props.bookingID}</h5>
      </div>
      
      {/* <h4 className="goToDashBoard">{props.dashboard}</h4> */}
    </div>
    
  </div>
  );
}

export default HotelReservationCard