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
    nav: false,
    dots: true,
    margin: 0,
    loop: true,
    smartSpeed: 600,
    center: true,
    responsive: {
      0: {
        margin: 40,
      },
      576: {
        margin: 50,
      },
      768: {
        margin: 60,
      },
      992: {
        margin: 100,
      },
    },
  };

  return (
    <>
      {data.length > 0 && (
        <OwlCarousel className="owl-theme owl-dot-normal owl" {...options}>
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
