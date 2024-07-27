import React from "react";

const SkillMatching = () => {
  return (
    <div className="template-container">
      <div className="sidebar"></div>
      <div className="skill">
        <div className="">
          <h2>Get AI Suggested Skillset Through Your Job Description</h2>
          <textarea
            className="custom-text-area"
            placeholder="Enter your text here..."
          ></textarea>
          <div className="skill-img">
            <img src="/about us.png" alt="" srcset="" />
          </div>
          <div className="skill-btn-div">
            <div className="skill-btn">Generate Template</div>
          </div>
        </div>
        <div className="skill-div-2">
          <h4>Skillset Matching Your Profile</h4>
          <div className="skills-set-card">
            {[0, 1, 2].map((items) => {
              return (
                <div className="card1" key={items}>
                  <div className="skill-icon">
                    <img src="/images/icon-bg.png" alt="image" style={{width:"5rem"}}/>
                    <img
                      src="/image 21.png"
                      alt="image"
                      className="match"
                      
                    />
                  </div>

                  <div className="card1_box">
                    <h6>Required Skillset</h6>
                    {[1, 2, 3, 4, 5].map((items) => {
                      return (
                        <div
                          className="skill-set"
                          style={{ width: "fit-content" }}
                        >
                          <div style={{ color: "#fff" }}>{items}</div>
                          <div style={{ color: "#fff" }}>Javascript</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="hide">
                    <img
                      src="/imgSkill/walking.png"
                      alt=""
                      className="walking1"
                      style={{width:"8.4rem"}}
                    />
                   <img src="/imgSkill/reading.png" alt="" style={{marginTop:"1.5rem"}}/>
                   <img src="/imgSkill/book.png" alt="" style={{width:"8.5rem", marginLeft:"2rem", marginTop:"1rem"}}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillMatching;
