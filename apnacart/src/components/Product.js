import React from 'react';

export default function Product(prop) {
  return (
    <div className = "row mt-3">
        <div className = "col-5">
            <h2>{prop.product.name}<span class="badge bg-secondary">₹{prop.product.price}</span></h2>
        </div>
        <div className = "col-2">
        <button type="button" class="btn btn-danger" onClick = {() => {prop.decQty(prop.index)}} >-</button>
        <button type="button" class="btn btn-primary">{prop.product.quantity}</button>
        <button type="button" class="btn btn-success" onClick = {() => {prop.incQty(prop.index)}} >+</button>
        </div>
        <div className = "col-2">
        {prop.product.quantity*prop.product.price}
        </div>
        <div className="col-2">
            <button className = "col-6 btn btn-danger" onClick = {() => {prop.remove(prop.index)}}>Remove</button>
        </div>
    </div>
  )
}
