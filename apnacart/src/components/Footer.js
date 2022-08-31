import React from 'react';


export default function Footer(prop) {
  return (
    <div className = "row fixed-bottom">
      <button className = "btn btn-danger col-2" onClick = {() => {prop.reset()}}>Reset</button>
      <div className = "col-8 bg-dark text-white">₹{prop.totalAmount}</div>
      <button className = "btn btn-primary col-2">Pay Now</button>
    </div>
  )
}
