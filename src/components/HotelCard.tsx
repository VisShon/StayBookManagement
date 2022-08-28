import React,{useEffect,useState} from 'react'
import '../styles/HotelCard.css';
import axios from 'axios'
function HotelCard({title, setReservationsData,reservationsData,apiRef}:any) {

  const [data,setData] = useState([]);
  useEffect(() =>{
    const getData = async () =>{
      const result = await axios.get(`http://35.212.128.152/api/${apiRef}/getReservations`).then(res=>setData(Object.values(res.data)))
    }
    getData();
  },[])

  const onClickHandler = () => {
    setReservationsData(data);
  }

  return (  
    <div className="card" onClick={onClickHandler}>
      <h2 className ="cardTitle">{title}</h2>
      <h2 className ="reservationCount">{data.length}</h2>
   </div>
  )
}

export default HotelCard;