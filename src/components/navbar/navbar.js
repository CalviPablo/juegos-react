import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navbar.css";

export default function Navbar() {
  const location = useLocation();

  const [active, setActive] = useState(null);
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark app-header">
        <div className="container">
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Link to="/">
            <img src="/images/logo-zonagamer.png" alt="Logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={"nav-link " + (active === "/" ? "active" : "")}
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "nav-link " + (active === "/productos" ? "active" : "")
                  }
                  to="/productos"
                >
                  Productos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
