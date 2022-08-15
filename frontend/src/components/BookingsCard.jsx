import React from 'react'
import '../styles/BookingsCard.css';
function BookingsCard(props) {
    var str= "card card-".concat(props.count);
  return (
    
    <div class={str}>
    <div className ="card__title">{props.title}</div>
    <div className = "card__link">{props.number}</div>
   </div>
  )
}

export default BookingsCard;