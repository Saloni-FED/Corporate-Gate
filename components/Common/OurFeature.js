const OurFeature = ({ title }) => {
  return (
    <>
      <div
        className="features-area pt-100 pb-70"
        style={{ fontFamily: "var(--fontFamily3)" }}
      >
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <p >
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled demoralized by the charms of
              pleasure of the moment, so blinded by desire, that
            </p>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/feature1.png" alt="image" />
                <h3>Easy Resume Building</h3>
                <p className="feat_para">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/fature2.png" alt="image" />
                <h3>AI Powered Cover Letter</h3>
                <p className="feat_para">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-box">
                <img src="/feature3.png" alt="image" />
                <h3>Get matching Job</h3>
                <p className="feat_para">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled demoralized by the charms of
                  pleasure of the moment, so blinded by desire, that they cannot
                  foresee the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
