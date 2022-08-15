import React from 'react'
import '../Styles/AllHotelReservationRecyclerView.css'
import HotelReservationCard from './cards/HotelReservationCard';
function AllHotelReservationRecyclerView() {
  return (
    <div className = "AllHotelReservationRecyclerViewWrapper">
     <HotelReservationCard name = "Anjanay Raina"  phoneNumber = "6284247485" bookingID ="1234"/>
    </div>
  );
}

export default AllHotelReservationRecyclerView;