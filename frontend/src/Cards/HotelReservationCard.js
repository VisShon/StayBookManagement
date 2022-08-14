import React from 'react'
import '../Styles/HotelReservationCard.css'
function HotelReservationCard(props) {
  return (
    <div className="Card">
    <div className="card__body">
      <div className = "NameWrapper">
      <h2 className="title">{props.name}</h2>
      <h5 className = "title">{props.bookingID}</h5>
      </div>
      <p className="description">{props.phoneNumber}</p>
      {/* <h4 className="goToDashBoard">{props.dashboard}</h4> */}
    </div>
    <button className="btn-3">Go To Dashboard</button>
  </div>
  );
}

export default HotelReservationCard