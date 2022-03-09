import PropTypes from "prop-types";
import React, { useRef } from "react";
import {
  HeadingSub,
  PostHorizontalTextMargin,
  PostVerticalCatTranslate,
  SliderNormal,
} from "../../../../components";

BlockModule03.propTypes = {
  data: PropTypes.array.isRequired,
};
BlockModule03.defaultProps = {
  data: [],
};

function BlockModule03({ data }) {
  const carouselRef = useRef();

  const handleCarouselPrev = () => {
    carouselRef?.current.prev(500);
  };
  const handleCarouselNext = () => {
    carouselRef?.current.next(500);
  };

  return (
    <section className="section-block block-module-03">
      <div className="container-lg px-15">
        <HeadingSub hasContainer={false} headingText={"TOP TRENDING"} />
        <div className="section-inner flex-box container-fullwidth">
          <div className="section-main">
            <div className="post-main">
              <PostHorizontalTextMargin data={data[0]} />
            </div>
            <div className="post-sub">
              <PostVerticalCatTranslate data={data[1]} />
            </div>
          </div>
          <div className="section-sub">
            <div className="slider-wrap">
              <div
                className="carousel-nav-custom-holder"
                data-carouselid="carousel-01"
              >
                <div className="owl-prev" onClick={handleCarouselPrev}>
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="owl-next" onClick={handleCarouselNext}>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <SliderNormal ref={carouselRef} data={data.slice(2)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockModule03;
