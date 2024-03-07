import React from 'react'
import "./navbar.css";
function Navbar() {
  return (
    <div className="container">
      <div className="content">
        <span className="logo">
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </span>
        <div className="search">
          <input type="text" placeholder="Search" />
          <div className="search-icon">
            <img src="/images/search-icon.svg" alt="" />
          </div>
        </div>
        <nav className="nav">
          <ul className="nav-list-wrap">
            <li className="nav-list active">
              <a href="#">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </li>
            <li className="nav-list">
              <a href="#">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </li>
            <li className="nav-list">
              <div className='user'>
              <a href="#">
                <img src="/images/user.svg" alt="" />
                <span>Login</span>
              </a>
              </div>
            </li>
            <li className="nav-list">
              <a href="#">
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar
