import React, { Component } from 'react'
import { products } from './Data'
export default class DisplayData extends Component {
  render() {
    return (
      <div>
      <table border={1}>
      <tr>
      <th>id</th>
      <th>title</th>
      <th>price</th>
      <th>quantity</th>
      </tr>
      {products.map((item) => {
        return (
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        </tr>
        );
      })}
      </table>
      </div>
    )
      
    }
}

