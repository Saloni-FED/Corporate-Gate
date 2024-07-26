import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TopHeader = () => {
  return (
    <>
      <div className="swipe-background" style={{fontFamily:"var(--fontFamily3)"}}>
        <div className="container">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="value-trade-slides"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="swipe-slide">
                  <ul className="swipe-list">
                    <li>How to start a finance business in 6 steps</li>
                  </ul>
                  <div className="swipe-info">
                    <p className="swipe-category">category: finance</p>
                    <p className="swipe-likes">
                      <img
                        src="/newimg/heart.png"
                        alt="heart"
                        className="swipe-heart"
                      />
                      Likes: 10k
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
