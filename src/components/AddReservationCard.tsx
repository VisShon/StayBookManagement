import React, { useState } from 'react'
import '../styles/AllHotels.scss';

function AddReservationCard({hotelName, hotelDescription, roomData}:any) {

  const[selected,setSelected] = useState(false)
  const[plans,setPlans] = useState<any[]>([])

  const addReservation = () =>{

  }

  return (
    <>
      <div className="reservationCard">
        <div>
          <h2 className="title">{hotelName}</h2>
          <p className="description" style={{width:'60%',fontSize:'0.75rem'}}>{hotelDescription}</p>
        </div>

        <div className="roomContainer">
          {Object.values(roomData).map((room:any,i:number) =>(<>
            <div className="container" key={i} onClick={() => {
              setSelected(prev=>!prev)
              setPlans(Object.values(room.plans))
            }}>
              <p className="description">{room.type}</p>
              <h2 className="title">{room.totalRooms}</h2>
            </div>
          </>))}
        </div>
     </div>

     
     {/* 
        username: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        checkIn: checkIn,
        checkOut: checkOut,
        amountPaid: price,
        selectedPlans:plans, 
      */}


     {selected&&<div className="addReserationContainer">
           <div className="container">
            <input placeholder="username"></input>
            <input placeholder="email"></input>
            <input placeholder="price" ></input>
           </div>

           <div className="container">
            Enter Check In
            <input type="date"></input>
            Enter Check Out
            <input type="date"></input>
           </div>

           <div className="container">
            Room Types
            {plans.map((item, index) =>
            (<div className="planType">{item.title}</div>))}
           </div>

           <div className="Book">Done</div>
     </div>}
    </>
  )
}



export default AddReservationCard;