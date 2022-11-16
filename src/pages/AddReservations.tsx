import React,{useEffect,useState} from 'react';
import AddReservationCard from '../components/AddReservationCard';
import '../styles/AllHotels.scss';
import client from '../client';
import Navbar from '../components/NavBar'

function AddReservations() {

  const [data,setData] =  useState<any[]>([])
  useEffect(()=>{
    client
      .fetch(
        `*[_type=='hotel']{
          name,
          slug,
          address,
          rooms[]{
            type,
            totalRooms,
            guests,
            info,
            plans,
          }
        }`
      )
      .then((res:any) => setData(res))
  },[])

  return (
    <>
      <Navbar/>   
      <div className="reservationContainer">
        {data.map((hotel,i)=>(<AddReservationCard hotelName={hotel.name}  hotelApiRef={hotel.slug.current} hotelDescription={hotel.address} roomData={hotel.rooms} key={i}/>))}
        <a href="https://staybook.sanity.studio/desk" className="Book">+</a>
      </div>
    </>
  )
}

export default AddReservations