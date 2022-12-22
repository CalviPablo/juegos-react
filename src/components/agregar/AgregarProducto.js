import React, { useState } from "react";

export default function AgregarProducto() {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);

  const onSubmit = (e) => {};
  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="mt-md-3 mt-3 text-title">Agregar un producto</h1>
          <hr />
          <div className="section">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="productName">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    placeholder="Product Name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
