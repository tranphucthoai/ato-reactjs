import PropTypes from 'prop-types';
import React from 'react';
import HeadingSub from '../../../components/heading-sub';
import PostHorizontalTextMargin from '../../../components/post-horizontal-text-margin';
import PostVerticalCatTranslate from '../../../components/post-vertical-cat-translate';
import SliderNormal from './../../../components/slider-normal';

BlockModule03.propTypes = {
    data: PropTypes.array.isRequired
};

function BlockModule03({ data }) {
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
                            <div className="carousel-nav-custom-holder" data-carouselid="carousel-01">
                                <div className="owl-prev js-carousel-prev">
                                    <i className="fa fa-angle-left"></i>
                                </div>
                                <div className="owl-next js-carousel-next">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </div>
                            {/* <div id="carousel-01" className="owl-carousel owl-theme js-carousel-autowidth">
                                {data.slice(2, 6).map(dataItem => (
                                    <div key={dataItem.dataId} className="item">
                                        <PostHorizontalSm data={dataItem} />
                                    </div>
                                ))}
                            </div> */}
                            <SliderNormal data={data.slice(2)} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlockModule03;