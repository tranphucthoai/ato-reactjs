import React from "react";
import PropTypes from "prop-types";
import PostVerticalSlider from "../PostVerticalSlider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

SliderDefault.propTypes = {
  data: PropTypes.array,
};

function SliderDefault({ data = [] }) {
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
          className="owl-theme owl-carousel owl-theme js-carousel-3i-center owl-dot-normal"
          options={options}
        >
          {data?.map((dataItem, index) => (
            <div key={dataItem?.dataId || index} className="item">
              <PostVerticalSlider data={dataItem} />
            </div>
          ))}
        </OwlCarousel>
      )}
    </>
  );
}

export default SliderDefault;
