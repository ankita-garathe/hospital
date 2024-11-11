import React from "react";

function SideBar1() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="typcn typcn-device-desktop menu-icon" />
              <span className="menu-title">Dashboard</span>
              <div className="badge badge-danger">new</div>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="typcn typcn-document-text menu-icon" />
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/dropdowns.html"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#form-elements"
              aria-expanded="false"
              aria-controls="form-elements"
            >
              <i className="typcn typcn-film menu-icon" />
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="pages/forms/basic_elements.html"
                  >
                    Basic Elements
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#charts"
              aria-expanded="false"
              aria-controls="charts"
            >
              <i className="typcn typcn-chart-pie-outline menu-icon" />
              <span className="menu-title">Charts</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/charts/chartjs.html">
                    ChartJs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#tables"
              aria-expanded="false"
              aria-controls="tables"
            >
              <i className="typcn typcn-th-small-outline menu-icon" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/tables/basic-table.html">
                    Basic table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#icons"
              aria-expanded="false"
              aria-controls="icons"
            >
              <i className="typcn typcn-compass menu-icon" />
              <span className="menu-title">Icons</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/icons/font-awesome.html">
                    Font Awesome
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="typcn typcn-user-add-outline menu-icon" />
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/blank-page.html">
                    {" "}
                    Blank Page{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-404.html">
                    {" "}
                    404{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/error-500.html">
                    {" "}
                    500{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/login.html">
                    {" "}
                    Login{" "}
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/samples/register.html">
                    {" "}
                    Register{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../../docs/documentation.html">
              <i className="typcn typcn-mortar-board menu-icon" />
              <span className="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar1;
