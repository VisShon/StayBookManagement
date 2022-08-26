import React,{useState} from 'react'
import Navbar from '../components/NavBar';
import HotelCard from '../components/HotelCard';
import ReservationCard from '../components/ReservationCard';
import SearchBookings from '../components/others/SearchBookings';
import AllHotelReservationRecyclerView from '../components/others/AllHotelReservationRecyclerView';
import '../styles/Dashboard.css'
import data from '../data/hotelData.json'

function MainDashboard() {

  const [reservationsData,setReservationsData] =  useState<any[]>([])

  console.log(reservationsData)
  return (
    <div className = "wrapper">
      <Navbar/>
      <div className="mainContainer">
        <div className="headingContainer">
          <h2 style={{fontSize: '5rem'}}> Good Morning </h2>
          <span style={{fontSize: '2rem',lineHeight: '0.25rem'}}>Here is what you have for the today</span>
        </div>
        <div className="cardsContainer">
          {data.map((hotel:any,i:number)=>(<HotelCard key={i} title={hotel.title} apiRef={hotel.apiRef} reservationsData={reservationsData} setReservationsData={setReservationsData}/>))}
        </div>
        <div className="reservationContainer">
          <h1 style={{fontSize: '2rem',paddingLeft: '2rem', color: '#CF8F24'}}>Reservations </h1>
          {reservationsData.map((res,i)=>(<ReservationCard plans={res.selectedPlans} name={res.username} email={res.email} checkIn={res.checkIn} checkOut={res.checkOut} amountPaid={res.amountPaid} />))}
        </div>

      </div>
    </div>
  )
}

export default MainDashboard;