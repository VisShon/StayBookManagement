import React from 'react'
import '../Styles/NewCard.css'
function Card(props) {
    return (
      <div className="Card">
        <div className="card__body">
          
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
          {/* <h4 className="goToDashBoard">{props.dashboard}</h4> */}
        </div>
        <button className="btn-3">Go To Dashboard</button>
      </div>
    );
  }
export default Card;
