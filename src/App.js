
import './App.css';

function App() {
  return (
    <>
    <div classname="App">
  <div className="container-scroller">
    {/* partial:partials/_navbar.html */}
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex justify-content-center">
        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
          <a className="navbar-brand brand-logo" href="index.html"><img src="../../../assets/images/logo.svg" alt="logo" /></a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="../../../assets/images/logo-mini.svg" alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="typcn typcn-th-menu" />
          </button>
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav me-lg-2">
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link" href="#" data-bs-toggle="dropdown" id="profileDropdown">
              <img src="../../../assets/images/faces/face5.jpg" alt="profile" />
              <span className="nav-profile-name">Eugenia Mullins</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
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
            <a className="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
              <h6 className="date mb-0">Today : Mar 23</h6>
              <i className="typcn typcn-calendar" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-bs-toggle="dropdown">
              <i className="typcn typcn-mail mx-0" />
              <span className="count" />
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
              <p className="mb-0 fw-normal float-start dropdown-header">Messages</p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="../../../assets/images/faces/face4.jpg" alt="image" className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis fw-normal">David Grey
                  </h6>
                  <p className="fw-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="../../../assets/images/faces/face2.jpg" alt="image" className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis fw-normal">Tim Cook
                  </h6>
                  <p className="fw-light small-text text-muted mb-0">
                    New product launch
                  </p>
                </div>
              </a>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="../../../assets/images/faces/face3.jpg" alt="image" className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                  <h6 className="preview-subject ellipsis fw-normal"> Johnson
                  </h6>
                  <p className="fw-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown me-0">
            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
              <i className="typcn typcn-bell mx-0" />
              <span className="count" />
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 fw-normal float-start dropdown-header">Notifications</p>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="typcn typcn-info mx-0" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject fw-normal">Application Error</h6>
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
                  <h6 className="preview-subject fw-normal">New user registration</h6>
                  <p className="fw-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="typcn typcn-th-menu" />
        </button>
      </div>
    </nav>
    {/* partial */}
    <nav className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0">
      <div className="navbar-links-wrapper d-flex align-items-stretch">
        <div className="nav-link">
          <a href="javascript:;"><i className="typcn typcn-calendar-outline" /></a>
        </div>
        <div className="nav-link">
          <a href="javascript:;"><i className="typcn typcn-mail" /></a>
        </div>
        <div className="nav-link">
          <a href="javascript:;"><i className="typcn typcn-folder" /></a>
        </div>
        <div className="nav-link">
          <a href="javascript:;"><i className="typcn typcn-document-text" /></a>
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
              <input type="text" className="form-control" placeholder="Search..." aria-label="search" aria-describedby="search" />
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
    <div className="container-fluid page-body-wrapper">      
      {/* partial:partials/_sidebar.html */}
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
            <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="typcn typcn-document-text menu-icon" />
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>              
                <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i className="typcn typcn-film menu-icon" />
              <span className="menu-title">Form elements</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="form-elements">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>                
              </ul>
            </div>
          </li>          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i className="typcn typcn-chart-pie-outline menu-icon" />
              <span className="menu-title">Charts</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i className="typcn typcn-th-small-outline menu-icon" />
              <span className="menu-title">Tables</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              </ul>
            </div>
          </li>          
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
              <i className="typcn typcn-compass menu-icon" />
              <span className="menu-title">Icons</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="icons">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
              </ul>
            </div>
          </li>         
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i className="typcn typcn-user-add-outline menu-icon" />
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>                                
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
      {/* partial */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-xl-6 grid-margin stretch-card flex-column">
              <h5 className="mb-2 text-titlecase mb-4">Status statistics</h5>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="mb-0 text-muted">Transactions</p>
                        <p className="mb-0 text-muted">+1.37%</p>
                      </div>
                      <h4>1352</h4>
                      <canvas id="transactions-chart" className="mt-auto" height={65} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <p className="mb-2 text-muted">Sales</p>
                          <h6 className="mb-0">563</h6>
                        </div>
                        <div>
                          <p className="mb-2 text-muted">Orders</p>
                          <h6 className="mb-0">720</h6>
                        </div>
                        <div>
                          <p className="mb-2 text-muted">Revenue</p>
                          <h6 className="mb-0">5900</h6>
                        </div>
                      </div>
                      <canvas id="sales-chart-a" className="mt-auto" height={65} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row h-100">
                <div className="col-md-6 stretch-card grid-margin grid-margin-md-0">
                  <div className="card">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <p className="text-muted">Sales Analytics</p>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h3 className="mb-">27632</h3>
                        <h3 className="mb-">78%</h3>
                      </div>
                      <canvas id="sales-chart-b" className="mt-auto" height={38} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row h-100">
                        <div className="col-6 d-flex flex-column justify-content-between">
                          <p className="text-muted">CPU</p>
                          <h4>55%</h4>
                          <canvas id="cpu-chart" className="mt-auto" />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-between">
                          <p className="text-muted">Memory</p>
                          <h4>123,65</h4>
                          <canvas id="memory-chart" className="mt-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 grid-margin stretch-card flex-column">
              <h5 className="mb-2 text-titlecase mb-4">Income statistics</h5>
              <div className="row h-100">
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start flex-wrap">
                        <div>
                          <p className="mb-3">Monthly Increase</p>
                          <h3>67842</h3>
                        </div>
                        <div id="income-chart-legend" className="d-flex flex-wrap mt-1 mt-md-0" />
                      </div>
                      <canvas id="income-chart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-2 mb-md-0 text-uppercase fw-medium">Overall sales</h6>
                    <div className="dropdown">
                      <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Last 30 days
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <a className="dropdown-item" href="javascript:;">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">Separated link</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="daoughnut-chart-sm">
                    <canvas id="sales-chart-c" className="mt-2" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 mt-4">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <p className="text-muted">Gross Sales</p>
                      <h5>492</h5>
                      <div className="d-flex align-items-baseline">
                        <p className="text-success mb-0">0.5%</p>
                        <i className="typcn typcn-arrow-up-thick text-success" />
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <p className="text-muted">Purchases</p>
                      <h5>87k</h5>
                      <div className="d-flex align-items-baseline">
                        <p className="text-success mb-0">0.8%</p>
                        <i className="typcn typcn-arrow-up-thick text-success" />
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <p className="text-muted">Tax Return</p>
                      <h5>882</h5>
                      <div className="d-flex align-items-baseline">
                        <p className="text-danger mb-0">-04%</p>
                        <i className="typcn typcn-arrow-down-thick text-danger" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                      <button className="btn bg-white p-0 pb-1 pt-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Last 7 days
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <a className="dropdown-item" href="javascript:;">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">Separated link</a>
                      </div>
                    </div>
                    <p className="mb-0">overview</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card newsletter-card bg-gradient-warning">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <h5 className="mb-3 text-white">Newsletter</h5>
                        <form className="form d-flex flex-column align-items-center justify-content-between w-100">
                          <div className="form-group mb-2 w-100">
                            <input type="text" className="form-control" placeholder="email address" />
                          </div>
                          <button className="btn btn-danger btn-rounded mt-1" type="submit">Subscribe</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 stretch-card">
                  <div className="card profile-card bg-gradient-primary">
                    <div className="card-body">
                      <div className="row align-items-center h-100">
                        <div className="col-md-4">
                          <figure className="avatar mx-auto mb-4 mb-md-0">
                            <img src="assets/images/faces/face20.jpg" alt="avatar" />
                          </figure>
                        </div>
                        <div className="col-md-8">
                          <h5 className="text-white text-center text-md-left">Phoebe Kennedy</h5>
                          <p className="text-white text-center text-md-left">kennedy@gmail.com</p>
                          <div className="d-flex align-items-center justify-content-between info pt-2">
                            <div>
                              <p className="text-white fw-bold">Birth date</p>
                              <p className="text-white fw-bold">Birth city</p>
                            </div>
                            <div>
                              <p className="text-white">16 Sep 2019</p>
                              <p className="text-white">Netherlands</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-2 mb-md-0 text-uppercase fw-medium">Sales statistics</h6>
                    <div className="dropdown">
                      <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Last 7 days
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton4">
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="javascript:;">Action</a>
                        <a className="dropdown-item" href="javascript:;">Another action</a>
                        <a className="dropdown-item" href="javascript:;">Something else here</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:;">Separated link</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <canvas id="sales-chart-d" height={320} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                    <div>
                      <p className="mb-2 text-md-center text-lg-left">Total Expenses</p>
                      <h1 className="mb-0">8742</h1>
                    </div>
                    <i className="typcn typcn-briefcase icon-xl text-secondary" />
                  </div>
                  <canvas id="expense-chart" height={80} />
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                    <div>
                      <p className="mb-2 text-md-center text-lg-left">Total Budget</p>
                      <h1 className="mb-0">47,840</h1>
                    </div>
                    <i className="typcn typcn-chart-pie icon-xl text-secondary" />
                  </div>
                  <canvas id="budget-chart" height={80} />
                </div>
              </div>
            </div>
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                    <div>
                      <p className="mb-2 text-md-center text-lg-left">Total Balance</p>
                      <h1 className="mb-0">$7,243</h1>
                    </div>
                    <i className="typcn typcn-clipboard icon-xl text-secondary" />
                  </div>
                  <canvas id="balance-chart" height={80} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="table-responsive pt-3">
                  <table className="table table-striped project-orders-table">
                    <thead>
                      <tr>
                        <th className="ms-5">ID</th>
                        <th>Project name</th>
                        <th>Customer</th>
                        <th>Deadline</th>
                        <th>Payouts	</th>
                        <th>Traffic</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#D1</td>
                        <td>Consectetur adipisicing elit </td>
                        <td>Beulah Cummings</td>
                        <td>03 Jan 2019</td>
                        <td>$ 5235</td>
                        <td>1.3K</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-success btn-sm btn-icon-text me-3">
                              Edit
                              <i className="typcn typcn-edit btn-icon-append" />                          
                            </button>
                            <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />                          
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#D2</td>
                        <td>Correlation natural resources silo</td>
                        <td>Mitchel Dunford</td>
                        <td>09 Oct 2019</td>
                        <td>$ 3233</td>
                        <td>5.4K</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-success btn-sm btn-icon-text me-3">
                              Edit
                              <i className="typcn typcn-edit btn-icon-append" />                          
                            </button>
                            <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />                          
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#D3</td>
                        <td>social capital compassion social</td>
                        <td>Pei Canaday</td>
                        <td>18 Jun 2019</td>
                        <td>$ 4311</td>
                        <td>2.1K</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-success btn-sm btn-icon-text me-3">
                              Edit
                              <i className="typcn typcn-edit btn-icon-append" />                          
                            </button>
                            <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />                          
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#D4</td>
                        <td>empower communities thought</td>
                        <td>Gaynell Sharpton</td>
                        <td>23 Mar 2019</td>
                        <td>$ 7743</td>
                        <td>2.7K</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-success btn-sm btn-icon-text me-3">
                              Edit
                              <i className="typcn typcn-edit btn-icon-append" />                          
                            </button>
                            <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />                          
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>#D5</td>
                        <td> Targeted effective; mobilize </td>
                        <td>Audrie Midyett</td>
                        <td>22 Aug 2019</td>
                        <td>$ 2455</td>
                        <td>1.2K</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-success btn-sm btn-icon-text me-3">
                              Edit
                              <i className="typcn typcn-edit btn-icon-append" />                          
                            </button>
                            <button type="button" className="btn btn-danger btn-sm btn-icon-text">
                              Delete
                              <i className="typcn typcn-delete-outline btn-icon-append" />                          
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
        {/* partial:partials/_footer.html */}
        <footer className="footer">
          <div className="card">
            <div className="card-body">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2024 <a href="https://www.bootstrapdash.com/" className="text-muted" target="_blank">Bootstrapdash</a>. All rights reserved.</span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center text-muted">Hand-crafted &amp; made with <i className="typcn typcn-heart-full-outline text-danger" /></span>
              </div>
            </div>    
          </div>        
        </footer>
        {/* partial */}
      </div>
      {/* main-panel ends */}
    </div>
    {/* page-body-wrapper ends */}
  </div>
  {/* container-scroller */}
</div>

    </>
  );
}

export default App;
