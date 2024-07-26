import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const Platform = () => {
  return (
    <>
      <div className="cryptocurrency-platform-area">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our Recently Top Blog</h2>
            <p>
              our top blog will help you in your resume ,finance, and to help
              you to get your dream job
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              922: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="cryptocurrency-platform-slides"
          >
            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-1.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img
                      src="/Ellipse 66.png"
                      alt="image"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">Finance</Link>
                  </h3>
                  <p>
                    go to homepage and login through your gmail and create an
                    account and get connected
                  </p>
                  <Link href="/blog" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/featRect.png"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img
                      src="/Ellipse 66.png"
                      alt="image"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">Finance</Link>
                  </h3>
                  <p>
                    go to homepage and login through your gmail and create an
                    account and get connected
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-4.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img
                      src="/Ellipse 66.png"
                      alt="image"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">Finance</Link>
                  </h3>
                  <p>
                    go to homepage and login through your gmail and create an
                    account and get connected
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    View More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-cryptocurrency-platform-box">
                <img
                  src="/images/cryptocurrency-platform/cryptocurrency-platform-2.jpg"
                  alt="image"
                  className="w-100"
                />
                <div className="content">
                  <div className="icon">
                    <img
                      src="/Ellipse 66.png"
                      alt="image"
                      style={{ width: "95%" }}
                    />
                  </div>
                  <h3>
                    <Link href="/cryptocurrency-details">Finance</Link>
                  </h3>
                  <p>
                    go to homepage and login through your gmail and create an
                    account and get connected
                  </p>
                  <Link href="/cryptocurrency-details" className="link-btn">
                    view More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Platform;
