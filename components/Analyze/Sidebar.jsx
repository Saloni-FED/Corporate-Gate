import React from "react";

const Sidebar = () => {
  const data = [
    { doc: "My Account", img: "/icon.png" },
    { doc: "My Resume", img: "/icon.png" },
    { doc: "My Details", img: "/icon.png" },
    { doc: "Edit Profile", img: "/icon.png" },
    { doc: "Settings", img: "/icon.png" },
  ];
  return (
    <div
      className="custom-sidebar"
      style={{ fontFamily: "var(--fontfamily3)" }}
    >
      <img src="/analyze.png" alt="Profile" className="custom-profile-image" />
      <p>Welcome Back</p>
      <h2>Kaira Singh</h2>

      <div className="side-box">
        {data.map((items, i)=>{
            return  <div className="box" key={i}>
            <img src={items.img} style={{ height: "20px" }} />
            <h6>{items.doc}</h6>
          </div>
        })}
        
      </div>
    </div>
  );
};

export default Sidebar;
