import React from "react";

function SideBar1() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#staff-registration"
              aria-expanded="false"
              aria-controls="staff-registration"
            >
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">Staff Registration </span>
              {/* <div className="badge badge-danger">new</div> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">Registration</span>
              {/* <div className="badge badge-danger">new</div> */}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#opd"
              aria-expanded="false"
              aria-controls="opd"
            >
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">OPD </span>
              {/* <div className="badge badge-danger">new</div> */}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#receiption-checkup"
              aria-expanded="false"
              aria-controls="receiption-checkup"
            >
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">Receiption Chackup</span>
              {/* <div className="badge badge-danger">new</div> */}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#opd-queue"
              aria-expanded="false"
              aria-controls="opd-queue"
            >
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">OPD Queue</span>
              {/* <div className="badge badge-danger">new</div> */}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#medicine-queue"
              aria-expanded="false"
              aria-controls="medicine-queue"
            >
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">Medicine Queue</span>
              {/* <div className="badge badge-danger">new</div> */}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar1;
