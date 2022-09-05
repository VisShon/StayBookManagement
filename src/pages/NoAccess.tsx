import React from 'react'

export default function NoAccess() {
  return (
    <div  className = "bgCard">
    <div className="fillerImage">
      <h2>Admin Portal</h2>
      <p style={{color: 'red'}}>You dont have Access to this portal contact the manager to gain access.</p>
    </div>
  </div>
  )
}
