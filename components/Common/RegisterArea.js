import Link from "next/link";

const RegisterArea = ({ bgGradient, blackText, ctaImage }) => {
  return (
    <>
      <div className={`cta-area pt-100 ${bgGradient}`}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className={`cta-content ${blackText}`}>
                <h2>Start Trading on Novis</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <Link href="https://www.coinbase.com/signup" className="default-btn global-cursor">
                  <i className="bx bxs-user"></i> Register Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="cta-image">
                <img src={ctaImage} alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* shape Images */}
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="shape7">
          <img src="/images/shape/shape7.png" alt="image" />
        </div>
        <div className="shape8">
          <img src="/images/shape/shape8.png" alt="image" />
        </div>
        <div className="shape9">
          <img src="/images/shape/shape9.png" alt="image" />
        </div>
        <div className="shape15">
          <img src="/images/shape/shape15.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
