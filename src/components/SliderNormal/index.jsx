import React from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PostHorizontalSm from "../PostHorizontalSm";
SliderNormal.propTypes = {
  data: PropTypes.array,
};

function SliderNormal({ data = [] }) {
  const options = {
    items: 1,
    nav: true,
    navText: [
      "<div className='nav-btn prev-slide'></div>",
      "<div className='nav-btn next-slide'></div>",
    ],
    rewind: true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
  };

  return (
    <>
      {data.length > 0 && (
        <OwlCarousel
          options={options}
          className="owl-carousel owl-theme js-carousel-3i-center owl-dot-normal"
        >
          {data?.map((dataItem, index) => (
            <div key={dataItem?.dataId || index} className="item">
              <PostHorizontalSm data={dataItem} />
            </div>
          ))}
        </OwlCarousel>
      )}
    </>
  );
}

export default SliderNormal;
