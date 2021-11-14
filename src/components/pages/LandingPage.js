import React from "react";
import "./LandingPage.css";

function Privacy() {
  return (
    <>
      <div className="landing-page-container">
        <div className="link">
          <a href="/photo-size-editor">Photo Size Editor</a>
          <a href="/" style={{ backgroundColor: "green" }}>
            Link1
          </a>
          <a href="/" style={{ backgroundColor: "#11324D" }}>
            Link2
          </a>
          <a href="/" style={{ backgroundColor: "#368B85" }}>
            Link3
          </a>
        </div>
      </div>
    </>
  );
}

export default Privacy;
