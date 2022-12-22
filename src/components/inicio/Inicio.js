import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Inicio() {
  const [productosPrincipales, setProductosPrincipales] = useState([]);
  const [ultimosProductos, setUltimosProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/category/consolas")
      .then((res) => {
        setProductosPrincipales(res.data);
      });
  }, [setProductosPrincipales]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/latest/juegos")
      .then((res) => {
        setUltimosProductos(res.data);
      });
  }, [setUltimosProductos]);

  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="mt-md-3 mt-3 text-title">Próximos lanzamientos</h1>
          <hr />
          {productosPrincipales.map((products) => {
            return (
              <div className="col-12 col-md-12" key={products.id}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h2 className="text-center">{products.name} </h2>
                    <p>{products.description}</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <figure className="figure">
                      <img
                        className="figure-img rounded d-block w-100"
                        src="https://via.placeholder.com/500x250"
                        alt="Juego"
                      />
                      <figcaption className="figure-caption">
                        <p>
                          Trailer del producto publicado en{" "}
                          <a href="/" target="new">
                            Youtube
                          </a>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section>
          <h2 className="pb-3 mt-4  text-titulo">Ultimos productos</h2>
          <hr className="divider" />
          <div className="row">
            {ultimosProductos.map((products) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-12 mb-3"
                  key={products.id}
                >
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://via.placeholder.com/200x160"
                      alt=""
                    />
                    <div className="card-body">
                      <h2 className="h4 card-title">{products.name}</h2>
                      <div className="card-text">
                        <p>Descripcion:{products.description}</p>
                        <p>Precio: {products.price}</p>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href={"detalle/" + products.id}>
                        <p className="btn btn-secondary">Mas detalles</p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
