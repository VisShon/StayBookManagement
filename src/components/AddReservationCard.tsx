import React, { useState } from 'react';
import '../styles/AllHotels.scss';
import axios from 'axios';
import emailjs from '@emailjs/browser'

function AddReservationCard({hotelName, hotelDescription, hotelApiRef, roomData}:any) {

  const[selected,setSelected] = useState('')
  const[plans,setPlans] = useState<any[]>([])


  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[price,setPrice] = useState('')
  const[checkIn,setCheckIn] = useState('')
  const[checkOut,setCheckOut] = useState('')
  const[roomPlan,setroomPlan] = useState<any[]>([])

  
  const addReservation = async () =>{
    setSelected('');
    let templateParams = {
      to_name:email,
    }
    const mail = await emailjs.send('service_pz9e3th','template_i78ka1b',templateParams,'bE7FBsdP5YFb4U6LK')
    .then(function(response) {
    }, function(error) {
      console.log(error)
    });
    const result = await axios.post(`http://35.212.128.152/api${hotelApiRef}/setReservations`,{
      username: username,
      email: email,
      checkIn: checkIn,
      checkOut: checkOut,
      amountPaid: price,
      selectedPlans:roomPlan,
    },{headers:{Authorization: `bearer ${sessionStorage['user']}`}})
    setroomPlan([]);
    setUsername('');
    setEmail('');
    setCheckIn('');
    setCheckOut('');
    setPrice('');
  }    

  return (
    <>
      <div className="reservationCard">
        <div>
          <h2 className="title">{hotelName}</h2>
          <p className="description" style={{width:'60%',fontSize:'0.75rem'}}>{hotelDescription}</p>
        </div>

        <div className="roomContainer">

          {Object.values(roomData).map((room:any,i:number) =>(            
          <div className={!(selected==room.type)?("container"):("container-selected")} key={i} onClick={() => {
              !(selected==room.type)?setSelected(room.type):setSelected('');
              setPlans(Object.values(room.plans))
            }}>

              <p className="description">{room.type}</p>
              <h2 className="title">{room.totalRooms}</h2>

            </div>))}
        </div>
     </div>


     {selected&&<div className="addReserationContainer">
           <div className="container">
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username"></input>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"></input>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="price" ></input>
           </div>

           <div className="container">
            Enter Check In
            <input value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} type="date"></input>
            Enter Check Out
            <input value={checkOut} onChange={(e)=>setCheckOut(e.target.value)} type="date"></input>
           </div>

           <div className="container">
            Room Types
            {plans.map((item, index) =>
            (<button onClick={()=>setroomPlan([...roomPlan, {...plans[index], roomType:selected}])} 
                  className={!(roomPlan.filter(res=>res.title == item.title))?("planType"):("planType-selected")} 
                  key={index}>
              {item.title}</button>))}
           </div>

           <div onClick={addReservation} className="Book">Done</div>
     </div>}
    </>
  )
}



export default AddReservationCard;