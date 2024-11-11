import "./App.css";
import MainPage from "./components/MainPage";
import NavBar1 from "./components/NavBar1";
import NavBar2 from "./components/NavBar2";
import Registration from "./components/Registration";
import SideBar1 from "./components/SideBar1";

function App() {
  return (
    <>
      <div className="App">
        <div className="container-scroller">
          {/* partial:partials/_navbar.html */}
          <NavBar1 />
          {/* partial */}
          <NavBar2 />

          <div className="container-fluid page-body-wrapper">
            {/* partial:partials/_sidebar.html */}
            <SideBar1 />
            {/* partial */}
            {/* <MainPage /> */}
            <Registration />
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
