import React from 'react';
import Product from "./Product.js";

export default function ProductList(prop) {
  return (
      prop.productList.length >0?
      prop.productList.map((product,i) =>{
          return <Product product = {product} key = {i} incQty = {prop.incQty} decQty = {prop.decQty} index = {i} remove = {prop.remove}/>
      }):<h1>No Product in the Cart</h1>
  )
}
