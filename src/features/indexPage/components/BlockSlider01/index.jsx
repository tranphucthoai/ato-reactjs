import PropTypes from "prop-types";
import React from "react";
import { HeadingMain, SliderDefault } from "../../../../components";

BlockSlider01.propTypes = {
  data: PropTypes.array,
};

function BlockSlider01({ data = [] }) {
  return (
    <>
      <section className="section-block block-slider-01">
        <HeadingMain hasContainer={true} headingText={"FEATURED NEWS"} />
        <div className="section-inner container-fullwidth">
          <div className="section-main">
            <div className="container">
              <SliderDefault data={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlockSlider01;
