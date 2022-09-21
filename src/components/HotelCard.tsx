import React,{useEffect,useState} from 'react'
import '../styles/HotelCard.scss';
import axios from 'axios'
function HotelCard({title, setReservationsData,apiRef,setHotelName}:any) {

  const [data,setData] = useState([]);
  
  useEffect(() =>{
    const getData = async () =>{
      return await axios.get(`http://localhost:8000/api/${apiRef}/getReservations`).then(res=>setData(Object.values(res.data)))
    }
    getData();
  },[])

  const onClickHandler = () => {
    setHotelName(apiRef);
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