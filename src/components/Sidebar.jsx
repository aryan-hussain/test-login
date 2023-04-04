import React from 'react';
import '../style/sidebar.css';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <nav id='sidebar'>
        <div className="container">
            <div className="sidebar">
                <div className="logo d-f j-c-c a-i-c">
                    <img src="https://www.bootstrapdash.com/demo/skydash/template/images/logo-light.svg" alt="img not found" />
                </div>
                <ul className="nav d-f flex-d-c">
                    <li className="nav-item active">
                        <Link to={"/home"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active">
                       <Link to={"/admin/login"} className="nav-link"> Dashboard</Link> 
                    </li>
                    <li className="nav-item active">
                        <Link to={"/home/products"} className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/login"}>Log out</Link>
                    </li>
                    <Outlet />
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;
