import React from "react"; 

const FeaturesArea = () => {
  return (
    <>
      <div className="features-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>How Do We Select Our Cryptocurrencies?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <img src="/images/icon/icon18.png" alt="image" />
                </div>
                <h3>Start Instantly</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="features-box">
                <div className="icon bg-ffefc7">
                  <img src="/images/icon/icon19.png" alt="image" />
                </div>
                <h3>Easy to Use</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="features-box">
                <div className="icon bg-ffc9c2">
                  <img src="/images/icon/icon20.png" alt="image" />
                </div>
                <h3>Secure and Regulated</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labore et doee magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesArea;
