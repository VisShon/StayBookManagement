import React,{useEffect,useState} from 'react';
import AddReservationCard from '../components/AddReservationCard';
import '../styles/AllHotels.scss';
import axios from 'axios'
import Navbar from '../components/NavBar'
function AddReservations() {

  const [data,setData] =  useState<any[]>([])
  useEffect(()=>{
    const getHotelData = async () => {
      const result = await axios.get(`http://35.212.128.152/api/getAllData`).then((value) => {
        setData(Object.values(value.data))
      });
    }
    getHotelData();
  },[])

  return (
    <div className="reservationContainer">
      <Navbar/>
      {data.map((hotel,i)=>(<AddReservationCard hotelName={hotel.name} hotelApiRef={hotel.link} hotelDescription={hotel.address} roomData={hotel.rooms} key={i}/>))}
      <div className="Book">+</div>
    </div>
  )
}

export default AddReservations