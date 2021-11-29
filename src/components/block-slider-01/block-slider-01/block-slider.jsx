import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostVerticalSlider from './../post-vertical-slider/index';

BlockSliderDefault.propTypes = {
    data: PropTypes.array
};
BlockSliderDefault.defaultProps = {
    data: []
};
function BlockSliderDefault({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className='owl-carousel owl-theme js-carousel-3i-center owl-dot-normal'>
            {
                data.map(dataItem => (
                    <div key={dataItem.dataId} className="item">
                        <PostVerticalSlider data={dataItem} />
                    </div>
                ))
            }

        </Slider>
    );
}

export default BlockSliderDefault;