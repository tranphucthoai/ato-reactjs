import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PostHorizontalSm from "./../PostHorizontalSm";

SliderNormal.propTypes = {
  data: PropTypes.array,
};
SliderNormal.defaultProps = {
  data: [],
};
function SliderNormal({ data }) {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="14.776"
          viewBox="0 0 60 14.776"
        >
          <g
            id="right-arrow-of-straight-thin-line"
            transform="translate(20 -166.237)"
          >
            <path
              id="Path_1493"
              data-name="Path 1493"
              d="M39.522,172.8l-11.14-6.432a.956.956,0,0,0-.956,1.656l8.053,4.649H-19.044a.956.956,0,0,0-.956.956.956.956,0,0,0,.956.956H35.472l-8.046,4.646a.956.956,0,1,0,.956,1.656l11.14-6.432a.956.956,0,0,0,0-1.656Z"
              transform="translate(0 0)"
              fill="#fff"
            ></path>
          </g>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          id="right-arrow-of-straight-thin-line"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="14.776"
          viewBox="0 0 60 14.776"
        >
          <path
            id="Path_1493"
            data-name="Path 1493"
            d="M.478,172.8l11.14-6.432a.956.956,0,0,1,.956,1.656L4.522,172.67H59.044a.956.956,0,1,1,0,1.912H4.528l8.046,4.646a.956.956,0,1,1-.956,1.656L.478,174.453a.956.956,0,0,1,0-1.656Z"
            transform="translate(0 -166.237)"
            fill="#fff"
          ></path>
        </svg>
      </div>
    );
  }
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => <div></div>,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1790,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="owl-carousel owl-theme js-carousel-3i-center owl-dot-normal"
    >
      {data.map((dataItem, index) => (
        <div key={dataItem?.dataId || index} className="item">
          <PostHorizontalSm data={dataItem} />
        </div>
      ))}
    </Slider>
  );
}

export default SliderNormal;
