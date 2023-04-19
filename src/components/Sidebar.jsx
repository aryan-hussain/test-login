import React, { useState, useEffect } from "react";
import "../style/sidebar.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = ({ hidden }) => {
  const [currentRoute, setCurrentRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <>
      {currentRoute === "/login" || currentRoute === "/signup" || currentRoute === "/admin/login" ? null : (
        <nav id="sidebar">
          <div className="container">
            <div className="sidebar">
              <ul className="nav d-f flex-d-c">
                <li className="nav-item active">
                  <Link to={"/home/products"} className="nav-link">
                    Category
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to={"/admin/login"} className="nav-link">
                    {" "}
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to={"/admin/dashboard"} className="nav-link">
                    Post Product
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    onClick={() => {
                      localStorage.removeItem("token")
                      localStorage.removeItem("cartItems")
                    }}
                    to={"/login"}
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Sidebar;
