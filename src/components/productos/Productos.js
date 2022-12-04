import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products/").then((res) => {
      setProducts(res.data);
      setAllProducts(res.data);
      // console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/category/").then((res) => {
      setFilters(res.data);
      // console.log(res.data);
    });
  }, []);

  const handleChange = (e) => {
    let selectedValue = e.target.value;
    console.log(products);
    let filteredArray = products.filter(
      (item) => item.category_id.toString() === selectedValue
    );
    console.log(filteredArray);
    if (selectedValue === "all") {
      setAllProducts(products);
    } else {
      setAllProducts(filteredArray);
    }
  };
  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="mt-md-3 mt-3 text-title">Productos: </h1>
          <hr className="divider" />
          <div className="izquierda">
            <h2 className="mt-md-3 mt-3">Categorias</h2>
            <select onChange={handleChange}>
              <option value="all">All</option>
              {filters.map((filter) => {
                return (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                );
              })}
            </select>
            <br />
          </div>
          <div className="row mt-4">
            {allProducts.map((product) => {
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
