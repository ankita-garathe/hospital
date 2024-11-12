import React from "react";
import Footer from "./Footer";

function MainPage() {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper"></div>
        {/* content-wrapper ends */}
        {/* partial:partials/_footer.html */}
        <Footer />
        {/* partial */}
      </div>
    </>
  );
}

export default MainPage;
