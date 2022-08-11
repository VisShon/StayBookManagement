import React from 'react'
import '../Styles/AllHotelsRecyclerView.css';
import Card from '../Cards/Card.js';
function AllHotelsRecyclerView() {
  return (
    <div>
    
    <div className = "wrapperDiv">

     <Card
    title="Hotel Aira Xing by Staybook ( 23380 )"
    description="1/5, Desh Bandhu Gupta Rd, opposite Police Station, Motia Khan, Paharganj, New Delhi, Delhi 110055"
  />

<Card
    title="Staybook Jyoti Mahal A Heritage Hotel ( 23539 )"
    description="2488"
  />

<Card
    title="Staybook Hotel Pinky Villa ( 23540 )"
    description="XV-2463-N, Nalwa St, Chuna Mandi, Paharganj, New Delhi, Delhi 110055"
  />
  <Card
    title="Hotel Jai Bala Ji ( 23690 )"
    description="9918, Plot No. 9918, Street, Multani Dhanda, Paharganj, Delhi, 110055"
  />
  <Card
    title="Staybook South Delhi ( 23719 )"
    description="B-14 East Of Kailash New Delhi"
  />
  <Card
    title="Staybook Woods View ( 23827 )"
    description="Camels Back Road Near Ambedkar Chowk Library"
  />
  <Card
    title="Staybook Hotel Geeson ( 23998 )"
    description="65, Desh Bandhu Gupta Rd, Arya Nagar, Paharganj, Delhi, 110055"
  />
  
  </div>

  </div>

  
    
  )
}



export default AllHotelsRecyclerView;