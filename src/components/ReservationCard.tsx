import React from 'react'
import '../styles/ReservationCard.css'
function HotelReservationCard({plans,name, email ,checkIn, checkOut, amountPaid}:any) {
  return (
    <>
      <div className="reservationCard">
      
      <div>
          <h2 className="title">{name}</h2>
          <p className="description">{email}</p>
        </div>

        <>
          <h2 className="title"> Check In {checkIn.substring(0, 10)}</h2>
          <h2 className="title">Check Out {checkOut.substring(0, 10)}</h2>
        </>

        <h5  style ={{color: '#CF8F24', fontSize:'1.5rem'}}>&#8377;{amountPaid}</h5>
     </div>
     <div className="reservationCardRoomContainer">
      {Object.values(plans).map((item:any, index:number) =>(<div className="reservationCardRoom" key={index}>
          <h2 className="title">{item.roomType}</h2>
          <p className="description">{item.title}</p>
        </div>))}
     </div>
    </>
  );
}

export default HotelReservationCard