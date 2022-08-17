import React from 'react'
import '../styles/ReservationCard.css'
function HotelReservationCard({name, email ,checkIn, checkOut, amountPaid}:any) {
  return (
    <div className="reservationCard">
      
      <div>
          <h2 className="title">{name}</h2>
          <p className="description">{email}</p>
        </div>

        <>
          <h2 className="title"> Check In {checkIn}</h2>
          <h2 className="title">Check Out {checkOut}</h2>
        </>

        <h5  style ={{color: '#CF8F24', fontSize:'1.5rem'}}>&#8377;{amountPaid}</h5>
  </div>
  );
}

export default HotelReservationCard