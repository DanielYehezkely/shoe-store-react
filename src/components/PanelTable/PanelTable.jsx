import React from "react";

import { Link } from "react-router-dom";

const PanelTable = ({shoes}) => {
  return <>
    <table >
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Id</th>
          <th>Info</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {shoes.map(shoe => (
          <tr key={shoe.id}>
            <td>
              <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            </td>
            <td className="name">{shoe.name}</td>
            <td>{shoe.id}</td>
            <td>{shoe.info}</td>
            <td className="price">${shoe.price}</td>
            <td><Link to={`/shoes/${shoe.id}`}><button className="btn panel-button">Edit</button></Link></td>
          </tr>
        ))}
      </tbody>
    </table>;
  </>
};

export default PanelTable;
