import React from "react";

function NavBar2() {
  return (
    <>
      <nav className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0">
        <div className="navbar-links-wrapper d-flex align-items-stretch">
          <div className="nav-link">
            <a href="javascript:;">
              <i className="typcn typcn-calendar-outline" />
            </a>
          </div>
          <div className="nav-link">
            <a href="javascript:;">
              <i className="typcn typcn-mail" />
            </a>
          </div>
          <div className="nav-link">
            <a href="javascript:;">
              <i className="typcn typcn-folder" />
            </a>
          </div>
          <div className="nav-link">
            <a href="javascript:;">
              <i className="typcn typcn-document-text" />
            </a>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <ul className="navbar-nav me-lg-2">
            <li className="nav-item ms-0">
              <h4 className="mb-0">Dashboard</h4>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-baseline">
                <p className="mb-0">Home</p>
                <i className="typcn typcn-chevron-right" />
                <p className="mb-0">Main Dahboard</p>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-search d-none d-md-block me-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="search"
                  aria-describedby="search"
                />
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text" id="search">
                    <i className="typcn typcn-zoom" />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar2;
