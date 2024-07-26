import React from "react";

const Template = () => {
    const images = [
        { img: "/template/img1.png", description: "Chronological" },
        { img: "/template/img2.png", description: "Functional" },
        { img: "/template/img3.png", description: "Combination (Hybrid)" },
        { img: "/template/img4.png", description: "Simple:" },
        { img: "/template/img5.png", description: "Creative" },
        { img: "/template/img6.png", description: "Modern" },
      ];
  return (
    <div className="template-container">
      <div className="sidebar"></div>
      <div className="template">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
        </div>
        <h1>Templates</h1>
        {/* <div className="popular-tags">
          <h2>Popular Tags</h2>
        </div> */}
        <div className="template-grid">
          {images.map((items,i) => {
            return (
              <div className="template-item" key={i}>
                <img src={items.img} alt="Chronological" />
                <p>{items.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Template;
