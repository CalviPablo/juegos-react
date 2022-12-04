import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  const handleChange = (e) => {
    let selectedValue = e.target.value;
    let filteredArray = products.filter((item) => item.type === selectedValue);
    setProducts(filteredArray);
  };
  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="mt-md-3 mt-3 text-title">Productos : </h1>
          <hr className="divider" />
          <div className="izquierda">
            <h2 className="mt-md-3 mt-3">Categorias</h2>
            <select onChange={handleChange}>
              <option value="">All</option>
              <option value="product">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
            </select>
            <br />
          </div>
          <div className="row mt-4">
            {products.map((product) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 mb-3" key={product.id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://via.placeholder.com/200x160"
                      alt="alt"
                    />
                    <div className="card-body">
                      <h2 className="h4 card-title">{product.name}</h2>
                      <div className="card-text">
                        <p>Descripcion:{product.description}</p>
                        <p>Precio: {product.price}</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <Link to={"detalle/" + product.id}>
                        <p className="btn btn-gris">Mas detalles</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
