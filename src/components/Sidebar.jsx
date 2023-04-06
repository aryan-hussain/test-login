import React from 'react';
import '../style/sidebar.css';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {

  //  function toggleClicked(clickedButton) {
  //   let buttons = document.querySelectorAll(".nav-item.active");
  //   buttons.forEach(function(button) {
  //     if (button !== clickedButton) {
  //       button.remove("clicked");
  //       button.style.backgroundColor = "blue";
  //     }
  //   });
  //   clickedButton.classList.toggle("clicked");
  //   if (clickedButton.contains("clicked")) {
  //     clickedButton.style.backgroundColor = "red";
  //   } else {
  //     clickedButton.style.backgroundColor = "blue";
  //   }
  // }

  return (
    <>
      <nav id='sidebar'>
        <div className="container">
            <div className="sidebar">
                
                <ul className="nav d-f flex-d-c">
                    <li className="nav-item active">
                        <Link to={"/home/products"}  className="nav-link">Category</Link>
                    </li>
                    <li className="nav-item active">
                       <Link to={"/admin/login"} className="nav-link"> Dashboard</Link> 
                    </li>
                    <li className="nav-item active">
                        <Link to={"/home"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/login"}>Log out</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;
