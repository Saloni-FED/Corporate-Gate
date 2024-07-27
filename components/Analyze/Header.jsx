import React from "react";

const Header = () => {
  return (
    <div className="custom-header">
      <div>
        <h1>Analyze your Resume</h1>
        <p>"Receive expert insights to enhance your resume and stand out."</p>
        <div className="custom-buttons">
          <button className="custom-upload-btn">
            <img
              src="/upload.png"
              alt=""
              srcset=""
              style={{ width: "1.5rem" }}
            />
            Upload Resume
          </button>
          <button
            style={{ border: "2px solid #00a79d", fontWeight: "bold" }}
            className="custom-create-btn"
          >
            Create Resume
          </button>
        </div>
      </div>
      <div>
        <img src="/analyze2.png" alt="" srcset="" className="img-head"/>
      </div>
    </div>
  );
};

export default Header;
