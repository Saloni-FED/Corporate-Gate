import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Banner = () => {
  const [name, setName] = useState("Bitcoin");
  const [nameTwo, setNameTwo] = useState("USD");

  //api data
  const [newData, setnewData] = useState([]);

  //converter hook
  const [conversionValue, setConversionValue] = useState("");
  const [cryptoQuantity, setcryptoQuantity] = useState(1);
  const [coinSymbol, setcoinSymbol] = useState("BTC");

  const [image, setImage] = useState(
    "/images/cryptocurrency/cryptocurrency2.png"
  );
  const [imageTwo, setImageTwo] = useState(
    "/images/cryptocurrency/cryptocurrency1.png"
  );

  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateTwo, setToggleStateTwo] = useState(false);

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat.name);
    setImage(cat.image);
    setcoinSymbol(cat.symbol.toUpperCase());
  };

  useEffect(() => {
    const getCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setnewData(data);
    };
    getCoins();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=${coinSymbol}&tsyms=USD`
      );

      setConversionValue(data.USD);
    };
    getData();
  }, [coinSymbol]);
  return (
    <>
      <div
        className="main-banner-area"
        style={{
          paddingTop: "10rem",
          paddingBottom: "10rem",
          fontFamily: "var(--fontFamily3)",
        }}
      >
        <div className="chat-bot">
          <img src="/bot.png" style={{width:"4rem"}}/>
        </div>
        <div className="container">
          <div className="main-banner-box">
            {/* <div className="currency-selection">
              <label>YOU PAY</label>
              <input
                type="text"
                value={cryptoQuantity}
                onChange={(e) => setcryptoQuantity(e.target.value)}
              />
              <div
                className={toggleState ? "dropdown show" : "dropdown"}
                onClick={() => toggleTabOne()}
              >
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={image} alt="image" />
                  {name}

                  <span>
                    {toggleState ? (
                      <i className="bx bx-chevron-up"></i>
                    ) : (
                      <i className="bx bx-chevron-down"></i>
                    )}
                  </span>
                </button>

                <ul
                  className={
                    toggleState ? "dropdown-menu show" : "dropdown-menu"
                  }
                >
                  {newData.length > 0 &&
                    newData.map((data, index) => (
                      <li
                        key={index}
                        onClick={(e) => toggleSelected(data, index)}
                        value="watch"
                        className={
                          clicked === index ? "option selected focus" : "option"
                        }
                      >
                        <div className="coin-wrapper">
                          <img src={data.image} alt="image" />
                          <span className="coin-name"> {data.name} </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div> */}
            <h3>Automated AI generated Cover letter</h3>
            <p>
              get AI powered generated cover letter through your resume in just
              one simple click and get your cover letter in your hands
            </p>

            <a
              href={`https://www.coinbase.com/accounts?quantity=${cryptoQuantity}`}
              target="_blank"
              className="coinbaseBtn"
            >
              <img
                src="/upload.png"
                style={{ width: "30px", height: "auto" }}
              />{" "}
              Upload Resume
            </a>
          </div>

          <div className="row align-items-center m-0">
            <div className="col-xl-6 col-lg-6 col-md-12 p-0">
              <div className="main-banner-content">
                <h1
                  style={{
                    fontWeight: "400",
                    fontFamily: "var(--fontFamily4)",
                  }}
                >
                  Get AI-powered Resume Analysis and Job Matching.
                </h1>
                <p>
                  Use AI to optimize your resume, find the perfect job, and gain
                  valuable career insights
                </p>
                <Link
                  href="https://www.coinbase.com/signup"
                  className="default-btn"
                >
                  <i className="bx bxs-user"></i> Register Now
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 p-0">
              <div className="main-banner-image">
                {/* <img src="/images/banner/banner-img1.png" alt="image" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape5">
          {/* <img src="/bg-home.png" alt="image" style={{ width: "100%" }} /> */}
          <img src="/images/shape/shape5.png" alt="image" />
        </div>
        <div className="shape9">
          <img src="/images/shape/shape9.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
