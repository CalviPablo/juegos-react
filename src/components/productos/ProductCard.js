import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3" key={props.product.id}>
      <div className="card">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/200x160"
          alt="alt"
        />
        <div className="card-body">
          <h2 className="h4 card-title">{props.product.name}</h2>
          <div className="card-text">
            <p>Descripcion:{props.product.description}</p>
            <p>Precio: {props.product.price}</p>
          </div>
        </div>
        <div className="card-footer">
          <Link to={"detalle/" + props.product.id}>
            <p className="btn btn-gris">Mas detalles</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
