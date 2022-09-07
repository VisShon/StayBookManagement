import React,{useState,useEffect} from 'react'
import HotelCard from '../components/HotelCard';
import ReservationCard from '../components/ReservationCard';
import '../styles/Dashboard.scss';
import axios from 'axios';
import Navbar from '../components/NavBar';
import refreshImage from '../images/refresh.svg';


function MainDashboard({getData}:any) {
  const [hotelName,setHotelName] = useState('');
  const [data,setData] =  useState<any[]>([])
  const [reservationsData,setReservationsData] =  useState<any[]>([])
  
  useEffect(()=>{
    const getHotelData = async () => {
      const result = await axios.get(`http://localhost:8000/api/getAllData`).then((value) => {
        setData(Object.values(value.data))
      });
    }
    getHotelData();
  },[])

  return (
    <div className = "wrapper">
      <Navbar/>
      <div className="mainContainer">
        <div className="headingContainer">
          <h2 style={{fontSize: '5rem'}}> Good Morning </h2>
          <span style={{fontSize: '2rem',lineHeight: '0.25rem'}}>Here is what you have for the today</span>
        </div>
        <div className="cardsContainer">
          {data.map((hotel:any,i:number)=>(<HotelCard key={i} setHotelName={setHotelName} title={hotel.name} apiRef={hotel.link}  setReservationsData={setReservationsData}/>))}
        </div>
        <div className="reservationContainer">
          <h1 style={{fontSize: '2rem',paddingLeft: '2rem', color: '#CF8F24'}}>Reservations </h1>
          <a onClick={()=>window.location.reload()} style={{width: '1rem'}}><img src={refreshImage} className="refresh"/></a>
          {reservationsData.map((res,i)=>(<ReservationCard  hotelName={hotelName} plans={res.selectedPlans} name={res.username} email={res.email} checkIn={res.checkIn} checkOut={res.checkOut} amountPaid={res.amountPaid} key={i} />))}
        </div>

      </div>
    </div>
  )
}

export default MainDashboard;