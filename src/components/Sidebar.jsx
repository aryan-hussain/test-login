import React from 'react';
import '../style/sidebar.css';
import { Link } from 'react-router-dom';

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
                        <a href="" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a href="" className="nav-link">Dashboard</a>
                    </li>
                    <li className="nav-item active">
                        <a href="" className="nav-link">Products</a>
                    </li>
                    <li className="nav-item active">
                        <Link to={"/"}><a href="" className="nav-link">Log out</a></Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;
