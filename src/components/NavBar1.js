import React from "react";

function NavBar1() {
  return (
    <>
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex justify-content-center">
          <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="../../../assets/images/logo.svg" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src="../../../assets/images/logo-mini.svg" alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="typcn typcn-th-menu" />
            </button>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav me-lg-2">
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="dropdown"
                id="profileDropdown"
              >
                <img
                  src="../../../assets/images/faces/face5.jpg"
                  alt="profile"
                />
                <span className="nav-profile-name">Eugenia Mullins</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item">
                  <i className="typcn typcn-cog-outline text-primary" />
                  Settings
                </a>
                <a className="dropdown-item">
                  <i className="typcn typcn-eject text-primary" />
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item nav-user-status dropdown">
              <p className="mb-0">Last login was 23 hours ago.</p>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-date dropdown">
              <a
                className="nav-link d-flex justify-content-center align-items-center"
                href="javascript:;"
              >
                <h6 className="date mb-0">Today : Mar 23</h6>
                <i className="typcn typcn-calendar" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="typcn typcn-mail mx-0" />
                <span className="count" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <p className="mb-0 fw-normal float-start dropdown-header">
                  Messages
                </p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../../../assets/images/faces/face4.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis fw-normal">
                      David Grey
                    </h6>
                    <p className="fw-light small-text text-muted mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../../../assets/images/faces/face2.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis fw-normal">
                      Tim Cook
                    </h6>
                    <p className="fw-light small-text text-muted mb-0">
                      New product launch
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../../../assets/images/faces/face3.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis fw-normal">
                      {" "}
                      Johnson
                    </h6>
                    <p className="fw-light small-text text-muted mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown me-0">
              <a
                className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                id="notificationDropdown"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="typcn typcn-bell mx-0" />
                <span className="count" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <p className="mb-0 fw-normal float-start dropdown-header">
                  Notifications
                </p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="typcn typcn-info mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal">
                      Application Error
                    </h6>
                    <p className="fw-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="typcn typcn-cog-outline mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal">Settings</h6>
                    <p className="fw-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="typcn typcn-user mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal">
                      New user registration
                    </h6>
                    <p className="fw-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="typcn typcn-th-menu" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar1;
