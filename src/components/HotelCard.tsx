import React,{useEffect,useState} from 'react'
import '../styles/HotelCard.scss';
import axios from 'axios'
function HotelCard({title, setReservationsData,apiRef,setApiRef}:any) {

  const [data,setData] = useState([]);
  
  useEffect(() =>{
    const getData = async () =>{
      return await axios.get(`https://staybook.in/api/${apiRef}/getReservations`).then(res=>setData(Object.values(res.data)))
    }
    getData();
  },[])

  const onClickHandler = () => {
    setApiRef(apiRef);
    data.sort((a: any, b: any) => b.checkIn.localeCompare(a.checkIn))
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
