import React from 'react'
import '../Styles/AllHotelsRecyclerView.css';
function AllHotelsRecyclerView() {
  return (
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

  
    
  )
}

function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
          {/* <h4 className="goToDashBoard">{props.dashboard}</h4> */}
        </div>
        <button className="btn-3">Go To Dashboard</button>
      </div>
    );
  }

export default AllHotelsRecyclerView